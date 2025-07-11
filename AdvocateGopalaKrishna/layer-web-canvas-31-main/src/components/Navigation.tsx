
import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleNavigation = (href: string) => {
    if (href === '#results') {
      navigate('/client-reviews');
      setIsOpen(false);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [{
    name: t('nav.home'),
    href: '#home'
  }, {
    name: t('nav.about'),
    href: '#about'
  }, {
    name: t('nav.services'),
    href: '#services'
  }, {
    name: t('nav.results'),
    href: '#results'
  }, {
    name: t('nav.contact'),
    href: '#contact'
  }];

  return (
    <nav className="fixed top-0 w-full bg-legal-dark/95 backdrop-blur-sm z-50 border-b border-legal-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-legal-gold" />
            <span className="font-serif text-xl font-bold text-legal-cream">{t('nav.brand')}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-legal-cream hover:text-legal-gold transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <LanguageSelector />
            <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-semibold px-6" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              {t('nav.consultation')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-legal-cream hover:text-legal-gold transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-legal-navy border-t border-legal-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-3 py-2 text-legal-cream hover:text-legal-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 pt-2 space-y-2">
              <LanguageSelector />
              <Button className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-semibold" onClick={() => {
            setIsOpen(false);
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
                {t('nav.consultation')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

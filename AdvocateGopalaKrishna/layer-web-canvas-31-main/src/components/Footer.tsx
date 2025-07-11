
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-legal-dark border-t border-legal-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-legal-gold" />
              <span className="font-serif text-xl font-bold text-legal-cream">
                {t('about.title')}
              </span>
            </div>
            <p className="text-legal-cream/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-legal-cream mb-4">{t('footer.practice.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-legal-cream/70 hover:text-legal-gold transition-colors">{t('footer.practice.estate')}</a></li>
              <li><a href="#services" className="text-legal-cream/70 hover:text-legal-gold transition-colors">{t('footer.practice.civil')}</a></li>
              <li><a href="#services" className="text-legal-cream/70 hover:text-legal-gold transition-colors">{t('footer.practice.criminal')}</a></li>
              <li><a href="#contact" className="text-legal-cream/70 hover:text-legal-gold transition-colors">{t('footer.practice.consultation')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-legal-cream mb-4">{t('footer.contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-legal-gold" />
                <span className="text-legal-cream/70">+91 9989530241</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-legal-gold" />
                <span className="text-legal-cream/70">gopalakrishnagorle@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-legal-gold" />
                <span className="text-legal-cream/70">{t('contact.info.office.location')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-legal-gold/20 mt-12 pt-8 text-center">
          <p className="text-legal-cream/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

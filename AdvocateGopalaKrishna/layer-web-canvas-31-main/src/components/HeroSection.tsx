import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-legal-cream mb-6 text-shadow animate-fade-in">
            {t('hero.title.advocate')} <span className="text-legal-gold">{t('hero.title.connect')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-legal-cream/90 mb-6 leading-relaxed animate-fade-in text-shadow">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg md:text-xl text-legal-cream/80 mb-8 leading-relaxed animate-fade-in text-shadow">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right">
            <Button 
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="tel:+919989530241">
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.call')}
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="mailto:gopalakrishnagorle@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                {t('hero.email')}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-legal-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-legal-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

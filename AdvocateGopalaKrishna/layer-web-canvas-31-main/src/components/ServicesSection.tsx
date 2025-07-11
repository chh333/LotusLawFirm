
import { Scale, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Scale,
      title: t('services.civil.title'),
      description: t('services.civil.description'),
      cta: t('services.civil.cta')
    },
    {
      icon: Shield,
      title: t('services.criminal.title'),
      description: t('services.criminal.description'),
      cta: t('services.criminal.cta')
    },
    {
      icon: Users,
      title: t('services.estate.title'),
      description: t('services.estate.description'),
      cta: t('services.estate.cta')
    }
  ];

  return (
    <section id="services" className="py-20 bg-legal-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-cream mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-legal-cream/80 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-legal-dark border-legal-gold/20 hover:border-legal-gold transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-legal-gold/10 rounded-full group-hover:bg-legal-gold/20 transition-colors">
                    <service.icon className="h-12 w-12 text-legal-gold" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-legal-cream mb-4">
                  {service.title}
                </h3>
                
                <p className="text-legal-cream/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline"
                  className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark transition-all duration-300"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-legal-gold/10 border border-legal-gold/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-legal-cream mb-4">
              {t('services.consultation.title')}
            </h3>
            <p className="text-legal-cream/80 text-lg mb-6">
              {t('services.consultation.description')}
            </p>
            <Button 
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-semibold px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('services.consultation.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

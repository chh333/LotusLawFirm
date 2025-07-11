
import { Award, Users, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Award, number: "15+", label: t('about.stats.experience') },
    { icon: Users, number: "500+", label: t('about.stats.cases') },
    { icon: Clock, number: "24/7", label: t('about.stats.availability') },
    { icon: TrendingUp, number: "95%", label: t('about.stats.success') }
  ];

  return (
    <section id="about" className="py-20 bg-legal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/bf2d02e6-7fef-42bd-a981-f68c523fbfcc.png"
                alt="Advocate Gopalakrishna Gorle"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-legal-gold/20 rounded-lg -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-legal-cream mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-xl text-legal-gold mb-4 font-semibold">
              {t('about.qualification')}
            </p>
            
            <p className="text-lg text-legal-cream/80 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            
            <p className="text-lg text-legal-cream/80 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-legal-navy/50 rounded-lg border border-legal-gold/20">
                  <stat.icon className="h-8 w-8 text-legal-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-legal-gold">{stat.number}</div>
                  <div className="text-legal-cream/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Anchorage, AK",
      text: "Eric and his team provided excellent representation. They fought hard for my case and got me the results I needed. Highly professional and caring.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Soldotna, AK", 
      text: "Outstanding criminal defense attorney. Eric's expertise and dedication saved my career. I can't thank him enough for his hard work.",
      rating: 5
    },
    {
      name: "Jennifer Davis",
      location: "Kenai, AK",
      text: "After my accident, Eric fought tirelessly to get me fair compensation. His attention to detail and legal expertise made all the difference.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-legal-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-cream mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-legal-cream/80 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-legal-dark border-legal-gold/20 hover:border-legal-gold transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Quote className="h-12 w-12 text-legal-gold/30" />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-legal-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-legal-cream/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    const { firstName, lastName, phone, email, message } = formData;
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = fullName || 'Contact Request';
    const body = `Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phone}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:gopalakrishnagorle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.call'),
      info: "+91 9989530241",
      description: t('contact.info.call.description')
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      info: "gopalakrishnagorle@gmail.com",
      description: t('contact.info.email.description')
    },
    {
      icon: MapPin,
      title: t('contact.info.office'),
      info: t('contact.info.office.location'),
      description: t('contact.info.office.description')
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      info: t('contact.info.hours.time'),
      description: t('contact.info.hours.description')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-legal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-cream mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-legal-cream/80 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-legal-navy border-legal-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-cream mb-6">{t('contact.form.title')}</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="firstName"
                      placeholder={t('contact.form.firstName')}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-legal-dark border-legal-gold/30 text-legal-cream placeholder-legal-cream/50"
                    />
                  </div>
                  <div>
                    <Input 
                      name="lastName"
                      placeholder={t('contact.form.lastName')}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-legal-dark border-legal-gold/30 text-legal-cream placeholder-legal-cream/50"
                    />
                  </div>
                </div>
                
                <Input 
                  name="email"
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-legal-dark border-legal-gold/30 text-legal-cream placeholder-legal-cream/50"
                />
                
                <Input 
                  name="phone"
                  placeholder={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-legal-dark border-legal-gold/30 text-legal-cream placeholder-legal-cream/50"
                />
                
                <Textarea 
                  name="message"
                  placeholder={t('contact.form.message')}
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-legal-dark border-legal-gold/30 text-legal-cream placeholder-legal-cream/50"
                />
                
                <Button 
                  type="button"
                  onClick={handleSendMessage}
                  className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-semibold py-3"
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-legal-cream mb-4">{t('contact.info.title')}</h3>
              <p className="text-legal-cream/80 leading-relaxed">
                {t('contact.info.description')}
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-legal-navy/50 rounded-lg border border-legal-gold/20">
                  <div className="p-2 bg-legal-gold/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-legal-cream">{item.title}</h4>
                    <p className="text-legal-gold font-medium">{item.info}</p>
                    <p className="text-legal-cream/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-legal-gold/10 border border-legal-gold/30 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-legal-cream mb-2">{t('contact.consultation.title')}</h4>
              <p className="text-legal-cream/80 mb-4">{t('contact.consultation.description')}</p>
              <Button 
                size="lg" 
                className="bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-semibold"
                onClick={() => window.open('tel:+919989530241')}
              >
                <Phone className="mr-2 h-5 w-5" />
                +91 9989530241
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

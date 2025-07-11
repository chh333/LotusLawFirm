
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.results': 'Results',
    'nav.contact': 'Contact',
    'nav.consultation': 'Free Consultation',
    'nav.brand': 'LOTUS LAW FIRM',
    
    // Hero Section
    'hero.title.advocate': 'Advocate',
    'hero.title.connect': 'Connect',
    'hero.subtitle': 'When you need an advocate for civil, criminal, constitutional, or estate-related matters, you deserve experienced and ethical representation.',
    'hero.description': 'With over 15 years of practice in the High Court of Andhra Pradesh, Advocate Gopalakrishna Gorle offers results-driven legal services rooted in knowledge, integrity, and dedication.',
    'hero.call': 'Call +91 9989530241',
    'hero.email': 'gopalakrishnagorle@gmail.com',

    // Services Section
    'services.title': 'Practice Areas',
    'services.subtitle': 'Dedicated legal representation across multiple practice areas with proven results in the High Court of Andhra Pradesh',
    'services.civil.title': 'Civil Matters',
    'services.civil.description': 'Comprehensive legal representation in civil disputes, property matters, contract disputes, and commercial litigation with expertise in High Court proceedings.',
    'services.civil.cta': 'Learn More',
    'services.criminal.title': 'Criminal Defense',
    'services.criminal.description': 'Expert criminal defense representation in the High Court of Andhra Pradesh, providing aggressive defense strategies for various criminal charges.',
    'services.criminal.cta': 'Free Consultation',
    'services.estate.title': 'Estate Law',
    'services.estate.description': 'Estate Law Specialist providing expert legal services in estate matters, including will drafting, probate, succession, inheritance disputes, and estate planning. I assist clients in smoothly managing the transfer of assets, ensuring legal compliance, and resolving family conflicts with sensitivity and clarity.',
    'services.estate.cta': 'Case Evaluation',
    'services.consultation.title': 'Free Consultation Available',
    'services.consultation.description': 'Connect with a registered advocate of the High Court of Andhra Pradesh for all your legal consultations and services',
    'services.consultation.cta': 'Schedule Your Consultation',

    // About Section
    'about.title': 'Advocate Gopalakrishna Gorle',
    'about.qualification': 'B.Sc., LL.M. | Estate Law Specialist',
    'about.description1': 'Senior counsel practicing in the High Court of Andhra Pradesh for over 15 years. Specializing in civil, criminal, and constitutional matters, I am known for providing transparent and ethical legal guidance.',
    'about.description2': 'I offer expert legal services in estate matters including will drafting, probate, succession, inheritance disputes, and estate planning. With years of trusted courtroom experience, I help clients navigate complex legal issues with clarity, compassion, and competence.',
    'about.stats.experience': 'Years Experience',
    'about.stats.cases': 'Cases Won',
    'about.stats.availability': 'Availability',
    'about.stats.success': 'Success Rate',

    // Testimonials Section
    'testimonials.title': 'What Clients Are Saying',
    'testimonials.subtitle': 'Real testimonials from clients who trusted us with their legal matters',

    // Contact Section
    'contact.title': 'Contact Us Today',
    'contact.subtitle': 'Connect with a registered advocate of the High Court of Andhra Pradesh for all your legal consultations and services.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Tell us about your legal matter...',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Get In Touch',
    'contact.info.description': 'Advocate Gopalakrishna Gorle is a senior counsel with over 15 years of experience in the High Court of Andhra Pradesh. I understand that legal issues can be stressful and overwhelming. I am here to guide you through every step of the process with transparency and ethical guidance.',
    'contact.info.call': 'Call Us',
    'contact.info.call.description': 'Available for legal consultations',
    'contact.info.email': 'Email',
    'contact.info.email.description': 'We respond within 24 hours',
    'contact.info.office': 'Office',
    'contact.info.office.location': 'Mangalagiri, Andhra Pradesh',
    'contact.info.office.description': 'High Court of Andhra Pradesh',
    'contact.info.hours': 'Hours',
    'contact.info.hours.time': 'Mon-Fri: 9AM-6PM',
    'contact.info.hours.description': 'Weekend consultations available',
    'contact.consultation.title': 'Need Legal Consultation?',
    'contact.consultation.description': 'Call now for expert legal guidance',

    // Footer
    'footer.description': 'Senior counsel practicing in the High Court of Andhra Pradesh for over 15 years, providing transparent and ethical legal guidance in civil, criminal, and constitutional matters.',
    'footer.practice.title': 'Practice Areas',
    'footer.practice.estate': 'Estate Law',
    'footer.practice.civil': 'Civil Matters',
    'footer.practice.criminal': 'Criminal Defense',
    'footer.practice.consultation': 'Free Consultation',
    'footer.contact.title': 'Contact Info',
    'footer.copyright': '© 2025 Advocate Gopalakrishna Gorle - High Court of Andhra Pradesh. All Rights Reserved.',
  },
  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.about': 'గురించి',
    'nav.services': 'సేవలు',
    'nav.results': 'ఫలితాలు',
    'nav.contact': 'సంప్రదింపులు',
    'nav.consultation': 'ఉచిత సలహా',
    'nav.brand': 'లోటస్ లా ఫర్మ్',
    
    // Hero Section
    'hero.title.advocate': 'న్యాయవాది',
    'hero.title.connect': 'కనెక్ట్',
    'hero.subtitle': 'సివిల్, క్రిమినల్, రాజ్యాంగ లేదా ఆస్తి సంబంధిత విషయాలకు మీకు న్యాయవాది అవసరమైనప్పుడు, మీరు అనుభవజ్ఞుడైన మరియు నైతిక ప్రాతినిధ్యానికి అర్హులు.',
    'hero.description': 'ఆంధ్రప్రదేశ్ హైకోర్టులో 15 సంవత్సరాలకు మించిన అభ్యాసంతో, న్యాయవాది గోపాలకృష్ణ గోర్లే జ్ఞానం, చిత్తశుద్ధి మరియు అంకితభావంలో పాతుకుపోయిన ఫలిత-ఆధారిత న్యాయ సేవలను అందిస్తున్నారు.',
    'hero.call': 'కాల్ చేయండి +91 9989530241',
    'hero.email': 'gopalakrishnagorle@gmail.com',

    // Services Section
    'services.title': 'అభ్యాస రంగాలు',
    'services.subtitle': 'ఆంధ్రప్రదేశ్ హైకోర్టులో నిరూపితమైన ఫలితాలతో అనేక అభ్యాస రంగాలలో అంకితమైన న్యాయ ప్రాతినిధ్యం',
    'services.civil.title': 'సివిల్ విషయాలు',
    'services.civil.description': 'సివిల్ వివాదాలు, ఆస్తి విషయాలు, కాంట్రాక్ట్ వివాదాలు మరియు వాణిజ్య వ్యాజ్యాలలో హైకోర్టు ప్రక్రియలలో నైపుణ్యంతో సమగ్ర న్యాయ ప్రాతినిధ్యం.',
    'services.civil.cta': 'మరింత తెలుసుకోండి',
    'services.criminal.title': 'క్రిమినల్ డిఫెన్స్',
    'services.criminal.description': 'ఆంధ్రప్రదేశ్ హైకోర్టులో నిపుణమైన క్రిమినల్ డిఫెన్స్ ప్రాతినిధ్యం, వివిధ క్రిమినల్ ఆరోపణలకు దూకుడు రక్షణ వ్యూహాలను అందిస్తోంది.',
    'services.criminal.cta': 'ఉచిత సలహా',
    'services.estate.title': 'ఎస్టేట్ న్యాయం',
    'services.estate.description': 'వీలునామా రచన, ప్రొబేట్, వారసత్వం, వారసత్వ వివాదాలు మరియు ఎస్టేట్ ప్రణాళికతో సహా ఎస్టేట్ విషయాలలో నిపుణ న్యాయ సేవలను అందించే ఎస్టేట్ న్యాయ నిపుణుడు. ఆస్తుల బదిలీని సాఫీగా నిర్వహించడంలో, న్యాయపరమైన అనుగుణ్యతను నిర్ధారించడంలో మరియు కుటుంబ వైరుధ్యాలను సున్నితత్వం మరియు స్పష్టతతో పరిష్కరించడంలో నేను క్లయింట్లకు సహాయం చేస్తాను.',
    'services.estate.cta': 'కేసు మూల్యాంకనం',
    'services.consultation.title': 'ఉచిత సలహా అందుబాటులో ఉంది',
    'services.consultation.description': 'మీ అన్ని న్యాయ సలహాలు మరియు సేవల కోసం ఆంధ్రప్రదేశ్ హైకోర్టు రిజిస్టర్డ్ న్యాయవాదితో కనెక్ట్ అవ్వండి',
    'services.consultation.cta': 'మీ సలహాను షెడ్యూల్ చేయండి',

    // About Section
    'about.title': 'న్యాయవాది గోపాలకృష్ణ గోర్లే',
    'about.qualification': 'బి.ఎస్సీ., ఎల్.ఎల్.ఎమ్. | ఎస్టేట్ న్యాయ నిపుణుడు',
    'about.description1': 'ఆంధ్రప్రదేశ్ హైకోర్టులో 15 సంవత్సరాలకు మించి అభ్యసిస్తున్న సీనియర్ న్యాయవాది. సివిల్, క్రిమినల్ మరియు రాజ్యాంగ విషయాలలో నైపుణ్యం కలిగి, పారదర్శక మరియు నైతిక న్యాయ మార్గదర్శకత్వం అందించడంలో ప్రసిద్ధి చెందారు.',
    'about.description2': 'వీలునామా రచన, ప్రొబేట్, వారసత్వం, వారసత్వ వివాదాలు మరియు ఎస్టేట్ ప్రణాళికతో సహా ఎస్టేట్ విషయాలలో నేను నిపుణ న్యాయ సేవలను అందిస్తాను. విశ్వసనీయ కోర్టు గది అనుభవంతో, క్లయింట్లు సంక్లిష్ట న్యాయ సమస్యలను స్పష్టత, కరుణ మరియు సామర్థ్యంతో నావిగేట్ చేయడంలో సహాయం చేస్తాను.',
    'about.stats.experience': 'సంవత్సరాల అనుభవం',
    'about.stats.cases': 'గెలిచిన కేసులు',
    'about.stats.availability': 'అందుబాటు',
    'about.stats.success': 'విజయ రేటు',

    // Testimonials Section
    'testimonials.title': 'క్లయింట్లు ఏం చెబుతున్నారు',
    'testimonials.subtitle': 'వారి న్యాయ విషయాలను మాపై వేచి చూసిన క్లయింట్ల నిజమైన సాక్ష్యాలు',

    // Contact Section
    'contact.title': 'ఈరోజే మాతో సంప్రదించండి',
    'contact.subtitle': 'మీ అన్ని న్యాయ సలహాలు మరియు సేవల కోసం ఆంధ్రప్రదేశ్ హైకోర్టు రిజిస్టర్డ్ న్యాయవాదితో కనెక్ట్ అవ్వండి.',
    'contact.form.title': 'మాకు సందేశం పంపండి',
    'contact.form.firstName': 'మొదటి పేరు',
    'contact.form.lastName': 'చివరి పేరు',
    'contact.form.email': 'ఇమెయిల్ చిరునామా',
    'contact.form.phone': 'ఫోన్ నంబర్',
    'contact.form.message': 'మీ న్యాయ విషయం గురించి మాకు చెప్పండి...',
    'contact.form.submit': 'సందేశం పంపండి',
    'contact.info.title': 'సంప్రదించండి',
    'contact.info.description': 'న్యాయవాది గోపాలకృష్ణ గోర్లే ఆంధ్రప్రదేశ్ హైకోర్టులో 15 సంవత్సరాలకు మించిన అనుభవం కలిగిన సీనియర్ న్యాయవాది. న్యాయ సమస్యలు ఒత్తిడితో మరియు అధికంగా ఉండవచ్చని నేను అర్థం చేసుకుంటాను. పారదర్శకత మరియు నైతిక మార్గదర్శకత్వంతో ప్రక్రియలోని ప్రతి దశలో మిమ్మల్ని మార్గనిర్దేశం చేయడానికి నేను ఇక్కడ ఉన్నాను.',
    'contact.info.call': 'మాకు కాల్ చేయండి',
    'contact.info.call.description': 'న్యాయ సలహాల కోసం అందుబాటులో ఉంది',
    'contact.info.email': 'ఇమెయిల్',
    'contact.info.email.description': '24 గంటల్లో మేము ప్రతిస్పందిస్తాము',
    'contact.info.office': 'కార్యాలయం',
    'contact.info.office.location': 'మంగళగిరి, ఆంధ్రప్రదేశ్',
    'contact.info.office.description': 'ఆంధ్రప్రదేశ్ హైకోర్టు',
    'contact.info.hours': 'సమయాలు',
    'contact.info.hours.time': 'సోమ-శుక్ర: 9AM-6PM',
    'contact.info.hours.description': 'వారాంత సలహాలు అందుబాటులో ఉన్నాయి',
    'contact.consultation.title': 'న్యాయ సలహా అవసరమా?',
    'contact.consultation.description': 'నిపుణ న్యాయ మార్గదర్శకత్వం కోసం ఇప్పుడే కాల్ చేయండి',

    // Footer
    'footer.description': 'ఆంధ్రప్రదేశ్ హైకోర్టులో 15 సంవత్సరాలకు మించి అభ్యసిస్తున్న సీనియర్ న్యాయవాది, సివిల్, క్రిమినల్ మరియు రాజ్యాంగ విషయాలలో పారదర్శక మరియు నైతిక న్యాయ మార్గదర్శకత్వం అందిస్తున్నారు.',
    'footer.practice.title': 'అభ్యాస రంగాలు',
    'footer.practice.estate': 'ఎస్టేట్ న్యాయం',
    'footer.practice.civil': 'సివిల్ విషయాలు',
    'footer.practice.criminal': 'క్రిమినల్ డిఫెన్స్',
    'footer.practice.consultation': 'ఉచిత సలహా',
    'footer.contact.title': 'సంప్రదింపు వివరాలు',
    'footer.copyright': '© 2025 న్యాయవాది గోపాలకృష్ణ గోర్లే - ఆంధ్రప్రదేశ్ హైకోర్టు. అన్ని హక్కులు రిజర్వ్డ్.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

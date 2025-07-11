
import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const ClientReviews = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ClientReviews;

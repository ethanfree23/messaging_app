import React from 'react';

import Hero from '../../src/components/Hero';
import Features from '../../src/components/Features';
import HowItWorks from '../../src/components/HowItWorks';
import Testimonials from '../../src/components/Testimonials';
import CTA from '../../src/components/CTA';
import FAQ from '../../src/components/FAQ';
import ContactSection from '../../src/components/ContactSection';

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Testimonials />
      <ContactSection />
      {/* Footer */}
    </div>
  );
};

export default HomePage;
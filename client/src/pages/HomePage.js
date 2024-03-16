import React from 'react';

import Header from '../../src/components/Header';
import Hero from '../../src/components/Hero';
import Features from '../../src/components/Features';
import HowItWorks from '../../src/components/HowItWorks';
import Testimonials from '../../src/components/Testimonials';
import CTA from '../../src/components/CTA';
import FAQ from '../../src/components/FAQ';
import ContactSection from '../../src/components/ContactSection';
// import Users from '../../src/components/Users';

function HomePage() {
  return (
    <div>
      {/* <Users /> */}
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Testimonials />
      <ContactSection />
      {/* Footer */}
    </div>
  );
};

export default HomePage;
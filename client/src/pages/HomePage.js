import React from 'react';

import Hero from '../../src/components/Hero';
import Features from '../../src/components/Features';
import HowItWorks from '../../src/components/HowItWorks';

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      {/* Testimonials
      CTA
      FAQ
      Contact
      Footer */}
    </div>
  );
};

export default HomePage;
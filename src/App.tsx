import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import SustainabilitySection from './components/sections/SustainabilitySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import NewsletterSection from './components/sections/NewsletterSection';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "AETHER | Modern Home Diffusers";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      
      <main>
        <HeroSection />
        <ProductsSection />
        <SustainabilitySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
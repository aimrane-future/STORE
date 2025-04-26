import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900 z-0" />
      
      {/* Animated background shapes */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/30 dark:bg-primary-800/20 rounded-full filter blur-3xl z-0 animate-float-slow"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-secondary-200/30 dark:bg-secondary-800/20 rounded-full filter blur-3xl z-0 animate-float"
        style={{ transform: `translateY(${scrollY * -0.03}px)` }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Transform Your Space</span>
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                With Modern Diffusers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Experience our premium collection of smart diffusers designed to elevate your home with sophisticated scents and cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                Shop Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div>
                <p className="font-semibold text-3xl">500+</p>
                <p className="text-gray-600 dark:text-gray-400">5-Star Reviews</p>
              </div>
              <div className="h-12 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <p className="font-semibold text-3xl">100%</p>
                <p className="text-gray-600 dark:text-gray-400">Natural Oils</p>
              </div>
              <div className="h-12 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <p className="font-semibold text-3xl">30-Day</p>
                <p className="text-gray-600 dark:text-gray-400">Return Policy</p>
              </div>
            </div>
          </div>
          
          <div className="lg:ml-auto relative">
            <div className="relative">
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full filter blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/6621426/pexels-photo-6621426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AETHER premium diffuser" 
                className="relative z-10 rounded-xl shadow-2xl object-cover max-h-[500px] w-full"
              />
              
              {/* Product details floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-20 animate-float-slow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">24h</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Extended Runtime</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Longest battery life in class</p>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-primary-600 text-white rounded-full px-3 py-1 text-sm font-medium z-20">
                New Release
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
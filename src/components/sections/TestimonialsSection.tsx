import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  const goToNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const goToPrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover how our products have transformed spaces and improved well-being.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-8 w-20 h-20 bg-primary-200/50 dark:bg-primary-800/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-secondary-200/50 dark:bg-secondary-800/20 rounded-full blur-xl"></div>
          
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex transition-transform duration-500 ease-out h-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  style={{
                    transform: index === activeIndex ? 'translateX(0)' : `translateX(${direction === 'right' ? '-100%' : '100%'})`,
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center p-6 md:p-10">
                    <div className="mb-6 md:mb-0 md:mr-10 flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 rounded-full shadow-md p-2">
                          <div className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full">
                            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{testimonial.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 'right' : 'left');
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-primary-600 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
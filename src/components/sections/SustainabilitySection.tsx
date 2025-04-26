import React from 'react';
import { Leaf, Zap, Recycle, Heart } from 'lucide-react';
import { sustainabilityFacts } from '../../data/sustainability';

const SustainabilitySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="text-primary-600 dark:text-primary-400" />;
      case 'Zap': return <Zap className="text-yellow-600 dark:text-yellow-400" />;
      case 'Recycle': return <Recycle className="text-green-600 dark:text-green-400" />;
      case 'Heart': return <Heart className="text-red-600 dark:text-red-400" />;
      default: return <Leaf className="text-primary-600 dark:text-primary-400" />;
    }
  };

  return (
    <section id="sustainability" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Sustainability</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We believe in creating products that not only improve your well-being but also minimize our impact on the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sustainabilityFacts.map((fact) => (
                <div 
                  key={fact.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(fact.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{fact.description}</p>
                  
                  {fact.percentage !== undefined && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${fact.percentage}%` }}
                      ></div>
                    </div>
                  )}
                  
                  {fact.percentage !== undefined && (
                    <p className="text-sm font-medium text-right">{fact.percentage}%</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full filter blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/1470168/pexels-photo-1470168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sustainable production" 
                className="relative rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-5 max-w-xs animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Leaf className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Carbon Neutral</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We offset 100% of our carbon emissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
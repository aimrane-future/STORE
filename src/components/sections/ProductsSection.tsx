import React, { useState } from 'react';
import { ShoppingCart, Heart, Plus, Check } from 'lucide-react';
import { products } from '../../data/products';
import Button from '../ui/Button';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'essential', name: 'Essential' },
    { id: 'premium', name: 'Premium' },
    { id: 'limited', name: 'Limited Edition' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Collection</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our range of innovative diffusers designed to transform your space
            and enhance your wellbeing through aromatherapy.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                </div>
                
                {/* Quick actions */}
                <div className="absolute right-4 top-4">
                  <button 
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      wishlist.includes(product.id)
                        ? 'bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300'
                        : 'bg-white/80 text-gray-700 dark:bg-gray-800/80 dark:text-gray-300 hover:bg-white hover:text-primary-600'
                    }`}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart size={16} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{product.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="group"
                    icon={<ShoppingCart size={16} />}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
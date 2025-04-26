import React from 'react';
import { Mail, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              AETHER
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Transforming spaces with our premium diffusers and essential oils.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Essential Diffusers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Premium Collection</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Limited Editions</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Essential Oils</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Stay updated with our latest products and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow rounded-l-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button 
                variant="primary"
                className="rounded-l-none"
                icon={<Mail size={18} />}
                aria-label="Subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AETHER. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Shipping</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, we would send this to a backend service
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Subscribe to our newsletter for exclusive offers, new product announcements, and aromatherapy tips.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={submitted ? <CheckCircle2 size={18} /> : <Send size={18} />}
                >
                  {submitted ? 'Thank You!' : 'Subscribe'}
                </Button>
                
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe anytime.
                </p>
              </form>
            </div>
            
            <div className="hidden md:block relative">
              <img
                src="https://images.pexels.com/photos/3765126/pexels-photo-3765126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Diffuser with plants"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
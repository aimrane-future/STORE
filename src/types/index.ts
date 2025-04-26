export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'essential' | 'premium' | 'limited';
  features: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface SustainabilityFact {
  id: string;
  title: string;
  description: string;
  icon: string;
  percentage?: number;
}
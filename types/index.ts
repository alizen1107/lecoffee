export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: 'coffee' | 'cookie';
  ingredients?: string[];
}

export interface Location {
  id: string;
  name: string;
  isActive: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
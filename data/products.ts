import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cappuccino',
    price: 10,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'coffee',
  },
  {
    id: '2',
    name: 'Brown Sugar Oatmilk Shaken Espresso',
    price: 11,
    image: 'https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'coffee',
  },
  {
    id: '3',
    name: 'Chocolate cookie',
    price: 5,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cookie',
    ingredients: [
      'All-purpose flour',
      'butter',
      'granulated sugar',
      'brown sugar',
      'eggs',
      'vanilla extract',
      'baking soda',
      'salt',
      'chocolate chips',
      '+ secret ingredient'
    ]
  },
  {
    id: '4',
    name: 'Latte',
    price: 9,
    image: 'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'coffee',
  },
  {
    id: '5',
    name: 'Espresso',
    price: 7,
    image: 'https://images.pexels.com/photos/585754/pexels-photo-585754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'coffee',
  },
  {
    id: '6',
    name: 'Oatmeal Raisin Cookie',
    price: 4,
    image: 'https://images.pexels.com/photos/5386673/pexels-photo-5386673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cookie',
    ingredients: [
      'Oats',
      'flour',
      'butter',
      'brown sugar',
      'eggs',
      'cinnamon',
      'raisins',
      'baking soda',
      'salt',
      'vanilla extract'
    ]
  }
];
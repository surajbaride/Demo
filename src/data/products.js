// Dummy JSON data for products
export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'Feature-rich smartwatch with health tracking',
    category: 'Electronics',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Comfortable running shoes for daily workouts',
    category: 'Fashion',
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Laptop Backpack',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    description: 'Durable laptop backpack with multiple compartments',
    category: 'Accessories',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500',
    description: 'Automatic coffee maker for perfect brew every time',
    category: 'Home',
    rating: 4.4,
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    description: 'Portable Bluetooth speaker with excellent sound quality',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 7,
    name: 'Leather Wallet',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
    description: 'Genuine leather wallet with RFID blocking',
    category: 'Fashion',
    rating: 4.2,
  },
  {
    id: 8,
    name: 'Yoga Mat',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    description: 'Non-slip yoga mat for all your fitness needs',
    category: 'Sports',
    rating: 4.6,
  },
  {
    id: 9,
    name: 'Phone Case',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=500',
    description: 'Protective phone case with shock absorption',
    category: 'Accessories',
    rating: 4.3,
  },
  {
    id: 10,
    name: 'Desk Lamp',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    description: 'LED desk lamp with adjustable brightness',
    category: 'Home',
    rating: 4.5,
  },
];

// Categories data
export const categories = [
  { id: 1, name: 'Electronics', icon: '📱' },
  { id: 2, name: 'Fashion', icon: '👕' },
  { id: 3, name: 'Home', icon: '🏠' },
  { id: 4, name: 'Sports', icon: '⚽' },
  { id: 5, name: 'Accessories', icon: '👜' },
];

// Orders data
export const orders = [
  {
    id: 1,
    orderNumber: 'ORD-001',
    date: '2024-01-15',
    status: 'Delivered',
    total: 99.99,
    items: [
      { name: 'Wireless Headphones', quantity: 1, price: 99.99 },
    ],
  },
  {
    id: 2,
    orderNumber: 'ORD-002',
    date: '2024-01-20',
    status: 'Pending',
    total: 249.99,
    items: [
      { name: 'Smart Watch', quantity: 1, price: 249.99 },
    ],
  },
  {
    id: 3,
    orderNumber: 'ORD-003',
    date: '2024-01-25',
    status: 'Delivered',
    total: 189.98,
    items: [
      { name: 'Running Shoes', quantity: 1, price: 129.99 },
      { name: 'Laptop Backpack', quantity: 1, price: 59.99 },
    ],
  },
  {
    id: 4,
    orderNumber: 'ORD-004',
    date: '2024-01-28',
    status: 'Pending',
    total: 79.99,
    items: [
      { name: 'Coffee Maker', quantity: 1, price: 79.99 },
    ],
  },
];


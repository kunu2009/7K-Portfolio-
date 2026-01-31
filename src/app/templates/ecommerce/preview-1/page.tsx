'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart, Search, Heart, Star } from 'lucide-react';
import { EcommerceIllustration } from '@/components/svg-illustrations';

export default function EcommercePreview1() {
  const [cart, setCart] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 4999,
      originalPrice: 7999,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80',
      category: 'Electronics',
      inStock: true
    },
    {
      id: 2,
      name: 'Leather Backpack',
      price: 2499,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 187,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?auto=format&fit=crop&w=800&q=80',
      category: 'Bags',
      inStock: true
    },
    {
      id: 3,
      name: 'Smart Watch Pro',
      price: 3999,
      originalPrice: 6999,
      rating: 4.9,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      category: 'Electronics',
      inStock: true
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 3499,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1528701800489-20be9a2d37b1?auto=format&fit=crop&w=800&q=80',
      category: 'Footwear',
      inStock: false
    },
    {
      id: 5,
      name: 'Laptop Stand',
      price: 1299,
      originalPrice: 2499,
      rating: 4.5,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      category: 'Accessories',
      inStock: true
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      price: 5999,
      originalPrice: 9999,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
      category: 'Electronics',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const totalPrice = cart.reduce((sum, productId) => {
    const product = products.find(p => p.id === productId);
    return sum + (product?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ShopHub
          </h1>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-700 text-white pl-10 pr-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-slate-300 hover:text-white transition-colors" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Flash Sale - Up to 50% Off!</h2>
            <p className="text-blue-100 text-lg mb-6">Limited time offers on premium products</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Shop Sale →
              </button>
              <button className="px-8 py-3 border border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                New arrivals
              </button>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="aspect-[4/3]">
              <EcommerceIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Featured Products</h3>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No products found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-blue-400 mb-2 uppercase font-bold">{product.category}</p>
                  <h4 className="font-bold mb-3 line-clamp-2">{product.name}</h4>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-blue-400">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="line-through text-slate-500">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`w-full py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${
                      product.inStock
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-slate-800 border border-slate-700 rounded-lg p-4 w-80 shadow-lg">
          <h4 className="font-bold mb-2">Order Summary</h4>
          <div className="bg-slate-700/50 rounded p-3 mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal:</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Shipping:</span>
              <span className="text-green-400">FREE</span>
            </div>
            <div className="border-t border-slate-600 pt-2 flex justify-between font-bold">
              <span>Total:</span>
              <span className="text-blue-400">₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all">
            Proceed to Checkout
          </button>
        </div>
      )}

      {/* Trust Badges */}
      <div className="bg-slate-800/50 border-t border-slate-700 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: '✓', title: 'Secure Payment', desc: '100% safe checkout' },
            { icon: '🚚', title: 'Fast Delivery', desc: '2-3 days delivery' },
            { icon: '↩️', title: 'Easy Returns', desc: '30 days return policy' },
            { icon: '💬', title: '24/7 Support', desc: 'Dedicated customer care' }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 text-center">
        <p className="text-sm text-blue-100 mb-4">
          Love this e-commerce template? Get your own customized store today!
        </p>
        <a
          href="https://wa.me/918591247148?text=Hi%20Kunal%2C%20I'm%20interested%20in%20the%20e-commerce%20template"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
        >
          💬 Get This Template
        </a>
      </div>
    </div>
  );
}

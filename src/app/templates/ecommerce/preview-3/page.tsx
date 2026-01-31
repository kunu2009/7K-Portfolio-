'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { DraggableCTA } from '@/components/draggable-cta';
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Star,
  Heart,
  ArrowRight,
  Sparkles,
  Award,
  Cloud,
  Flame,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Download
} from 'lucide-react';
import { CandleIllustration } from '@/components/svg-illustrations';

export default function CandleShop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'scented', 'handmade', 'gift-sets'];

  const products = [
    {
      id: 1,
      name: 'Lavender Dreams',
      category: 'scented',
      price: 599,
      image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=900&q=80',
      tag: 'bestseller',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Vanilla Bliss',
      category: 'scented',
      price: 549,
      image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=80',
      tag: 'popular',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Ocean Breeze',
      category: 'scented',
      price: 649,
      image: 'https://images.unsplash.com/photo-1504198266285-165a06f9b283?auto=format&fit=crop&w=900&q=80',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Handmade Luxury',
      category: 'handmade',
      price: 999,
      image: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&w=900&q=80',
      tag: 'premium',
      rating: 5.0
    },
    {
      id: 5,
      name: 'Gift Box Set',
      category: 'gift-sets',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=900&q=80',
      tag: 'gift',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Candle Trio',
      category: 'gift-sets',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=900&q=80',
      rating: 4.8
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Sweet Candle',
      desc: 'Hand-poured with premium soy wax'
    },
    {
      icon: Award,
      title: 'Natural Blend',
      desc: 'Eco-friendly & sustainable scents'
    },
    {
      icon: Heart,
      title: 'Unique Gifts',
      desc: 'Perfect for any occasion'
    },
    {
      icon: Flame,
      title: 'Long Lasting',
      desc: '40+ hours burn time'
    }
  ];

  const team = [
    { name: 'Kunal', role: 'Founder' },
    { name: 'Aditya', role: 'Designer' },
    { name: 'Priya', role: 'Manager' },
    { name: 'Neha', role: 'Creative Lead' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-50">
      {/* Demo Badge - Draggable */}
      <DraggableCTA
        price="₹8,000"
        title="7K Candles Shop"
        whatsappLink="https://wa.me/918591247148?text=Hi!%20I'm%20interested%20in%20the%207K%20Candles%20Shop%20template%20(₹8,000)"
        color="blue"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xl">7K</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Candles</div>
                <div className="text-xs text-orange-600 font-semibold">by Kunal 7K</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#shop" className="text-gray-700 hover:text-orange-600 transition">Shop</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-gray-700 hover:text-orange-600"><Search className="w-5 h-5" /></button>
              <button onClick={() => setCartOpen(!cartOpen)} className="relative text-gray-700 hover:text-orange-600">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
              <button
                className="md:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#shop" className="block py-2 text-gray-700">Shop</a>
              <a href="#about" className="block py-2 text-gray-700">About</a>
              <a href="#contact" className="block py-2 text-gray-700">Contact</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-12">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Words of the</span>
                <br/>
                <span className="text-orange-600">Week</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6 max-w-md">
                Discover our curated collection of premium scented candles, handmade with love and natural ingredients. Perfect for relaxation, gifting, or creating a cozy atmosphere.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Shop Now →
              </button>
            </div>
            
            <div className="relative h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl"></div>
              <div className="relative z-10 w-full max-w-xl p-6">
                <div className="bg-white/70 rounded-2xl p-4 shadow-xl">
                  <div className="aspect-[4/3]">
                    <CandleIllustration />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const IconComponent = f.icon;
              return (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <div className="font-bold text-lg mb-1">{f.title}</div>
                  <div className="text-sm opacity-90">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Candles Shop</h2>
          <p className="text-center text-gray-600 mb-8">Discover our premium collection of hand-crafted candles</p>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-8">
            {['all', 'scented', 'handmade', 'gift-sets'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-orange-100 h-48 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  {product.tag && (
                    <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">₹{product.price}</span>
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Kunal's 7K Candles</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-8xl">✨</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative & Unique</h3>
              <p className="text-gray-600 mb-4">
                At 7K Candles, we believe in crafting the perfect scent experience. Each candle is hand-poured with premium wax and natural fragrances.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality and sustainability ensures that every candle you light is made with care for you and our planet.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">Learn More</button>
            </div>
          </div>

          {/* Team */}
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h4 className="font-bold text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold mb-1">Email</div>
              <a href="mailto:kunalchheda13@gmail.com" className="hover:underline">kunalchheda13@gmail.com</a>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold mb-1">Phone</div>
              <a href="tel:+918591247148" className="hover:underline">+91 8591 247 148</a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold mb-1">Location</div>
              <div>Pune, India</div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/918591247148?text=Hi!%20I'd%20like%20to%20inquire%20about%20your%20candles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Message on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold mb-2">7K Candles</div>
              <p className="text-sm">Premium scented candles for every occasion.</p>
            </div>
            <div>
              <div className="text-white font-bold mb-2">Shop</div>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:text-white">Scented</a></li>
                <li><a href="#" className="hover:text-white">Handmade</a></li>
                <li><a href="#" className="hover:text-white">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-bold mb-2">Follow</div>
              <div className="flex gap-3">
                <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <div className="text-white font-bold mb-2">Legal</div>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2026 Kunal's 7K Candles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

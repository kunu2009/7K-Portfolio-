"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, X, Truck, Shield, Headphones, Leaf, Droplet, Sun, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PlantStoreTemplate() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");
  const [email, setEmail] = useState("");

  const products = [
    { id: 1, name: "Monstera Deliciosa", price: "$24.99", category: "Indoor Plants", image: "🌿" },
    { id: 2, name: "Fiddle Leaf Fig", price: "$34.99", category: "Indoor Plants", image: "🌱" },
    { id: 3, name: "Snake Plant", price: "$18.99", category: "Best Sellers", image: "🪴" },
    { id: 4, name: "Pothos Golden", price: "$16.99", category: "Best Sellers", image: "🌿" },
    { id: 5, name: "Peace Lily", price: "$22.99", category: "Customer Favorites", image: "🌱" },
    { id: 6, name: "Rubber Plant", price: "$28.99", category: "Customer Favorites", image: "🪴" },
  ];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-[#1A4D2E] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-[#F5F1E8]" />
              <span className="text-2xl font-bold">Plantz Avenue</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#FAC67A] transition">Home</a>
              <a href="#shop" className="hover:text-[#FAC67A] transition">Shop</a>
              <a href="#about" className="hover:text-[#FAC67A] transition">About</a>
              <a href="#blog" className="hover:text-[#FAC67A] transition">Blog</a>
              <a href="#contact" className="hover:text-[#FAC67A] transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hover:text-[#FAC67A] transition">
                <Search className="h-5 w-5" />
              </button>
              <button className="relative hover:text-[#FAC67A] transition">
                <Heart className="h-5 w-5" />
              </button>
              <button className="relative hover:text-[#FAC67A] transition">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 hover:text-[#FAC67A]">Home</a>
              <a href="#shop" className="block py-2 hover:text-[#FAC67A]">Shop</a>
              <a href="#about" className="block py-2 hover:text-[#FAC67A]">About</a>
              <a href="#blog" className="block py-2 hover:text-[#FAC67A]">Blog</a>
              <a href="#contact" className="block py-2 hover:text-[#FAC67A]">Contact</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-[#1A4D2E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Bring The Nature<br />Close To You
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Explore our plant shop and find your perfect green companion for a healthier lifestyle. Transform your space with our curated collection of beautiful, easy-care plants.
              </p>
              <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55A2B] transition shadow-lg">
                Shop Now →
              </button>
            </div>
            <div className="relative">
              <div className="bg-[#F5F1E8] rounded-t-full w-80 h-96 mx-auto flex items-end justify-center overflow-hidden shadow-2xl">
                <div className="text-8xl mb-8">🌿</div>
              </div>
              <div className="absolute top-4 right-4 bg-white text-[#1A4D2E] rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
                80+
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-start space-x-4">
              <Truck className="h-10 w-10 text-[#FAC67A] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
                <p className="text-gray-300 text-sm">Orders over $50 ship free with tracking</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="h-10 w-10 text-[#FAC67A] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Safe Payment</h3>
                <p className="text-gray-300 text-sm">100% secure payment methods</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Headphones className="h-10 w-10 text-[#FAC67A] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Friendly Services</h3>
                <p className="text-gray-300 text-sm">24/7 customer support available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F1E8] rounded-lg p-8 hover:shadow-xl transition">
              <p className="text-[#1A4D2E] text-sm font-semibold mb-2">Top Our Products</p>
              <h3 className="text-3xl font-bold text-[#1A4D2E] mb-4">Indoor<br />Plants</h3>
              <a href="#shop" className="text-[#FF6B35] font-semibold hover:underline">
                Shop Now →
              </a>
              <div className="mt-6 text-6xl">🪴</div>
            </div>
            <div className="bg-[#F5F1E8] rounded-lg p-8 hover:shadow-xl transition">
              <p className="text-[#1A4D2E] text-sm font-semibold mb-2">Our Products</p>
              <h3 className="text-3xl font-bold text-[#1A4D2E] mb-4">Outdoor<br />Plants</h3>
              <a href="#shop" className="text-[#FF6B35] font-semibold hover:underline">
                Shop Now →
              </a>
              <div className="mt-6 text-6xl">🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-16 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1A4D2E] mb-12">Our Products</h2>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-2">
            {["Best Sellers", "Indoor Plants", "Customer Favorites"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[#1A4D2E] text-white"
                    : "bg-white text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative bg-[#E8F5E9] h-64 flex items-center justify-center">
                  <span className="text-8xl">{product.image}</span>
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                    <Heart className="h-5 w-5 text-[#1A4D2E]" />
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-xl font-bold text-[#1A4D2E] mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#FF6B35]">{product.price}</span>
                    <button
                      onClick={addToCart}
                      className="bg-[#1A4D2E] text-white px-6 py-2 rounded-full hover:bg-[#0F3A1F] transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Care Section */}
      <section className="py-16 bg-[#1A4D2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#F5F1E8] rounded-full w-64 h-64 flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-8xl">🌿</span>
              </div>
              <div className="absolute top-8 -right-8 bg-white rounded-lg p-4 shadow-xl">
                <span className="text-6xl">🪴</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Grow Plant For<br />A Better Life</h2>
              <p className="text-gray-300 mb-8">
                Come with us on a journey to healthier living with our selection of house plants. Bring nature inside and watch your space transform with our easy-care plant companions that purify air and boost your mood.
              </p>
              <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55A2B] transition">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Care Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1A4D2E] mb-4">
            Steps to start taking care of your plants
          </h2>
          <p className="text-center text-gray-600 mb-12">
            The right solution for the care of green and sweet plants
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1A4D2E] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D2E] mb-3">Humidity Control</h3>
              <p className="text-gray-600">
                Manage humidity control with misting, pebble trays and humidifiers for tropical plants that need extra moisture.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1A4D2E] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D2E] mb-3">Pest Management</h3>
              <p className="text-gray-600">
                Understanding preventive pest management and establishing your own pesticide alternatives to keep plants thriving.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1A4D2E] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D2E] mb-3">Pruning Needs</h3>
              <p className="text-gray-600">
                Taking care of pruning removing dead leaves, controlling growth, and encouraging new leaves and flowers to bloom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Care Guide */}
      <section className="py-16 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#1A4D2E] rounded-lg p-2">
              <div className="bg-[#E8F5E9] rounded-lg h-96 flex items-center justify-center">
                <span className="text-9xl">🌿</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1A4D2E] mb-6">
                Come with us how to grow your plants to be better and healthier
              </h2>
              <p className="text-gray-600 mb-6">
                Gone are the days of guessing if your houseplants get the right care. With these tips on how to care for your green and sweet plants, from watering to light requirements, your house plants will flourish. Make your home a green and peaceful place today!
              </p>
              <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55A2B] transition">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1A4D2E] mb-12">Follow us on Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["🌿", "🪴", "🌱", "🍃"].map((emoji, i) => (
              <div key={i} className="bg-[#E8F5E9] aspect-square rounded-lg flex items-center justify-center text-6xl hover:scale-105 transition cursor-pointer">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#1A4D2E] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay In The Loop With Special Offers,<br />Plant Parenting Tips, & More</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-6 py-3 rounded-full w-full sm:w-auto bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FAC67A]"
            />
            <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55A2B] transition">
              Subscribe →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3A1F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8" />
                <span className="text-xl font-bold">Plantz Avenue</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Bringing nature closer to you with our curated collection of beautiful plants.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 cursor-pointer hover:text-[#FAC67A] transition" />
                <Instagram className="h-5 w-5 cursor-pointer hover:text-[#FAC67A] transition" />
                <Twitter className="h-5 w-5 cursor-pointer hover:text-[#FAC67A] transition" />
                <Youtube className="h-5 w-5 cursor-pointer hover:text-[#FAC67A] transition" />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FAC67A] transition">Home</a></li>
                <li><a href="#" className="hover:text-[#FAC67A] transition">Shop</a></li>
                <li><a href="#" className="hover:text-[#FAC67A] transition">About</a></li>
                <li><a href="#" className="hover:text-[#FAC67A] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FAC67A] transition">FAQs</a></li>
                <li><a href="#" className="hover:text-[#FAC67A] transition">Shipping</a></li>
                <li><a href="#" className="hover:text-[#FAC67A] transition">Returns</a></li>
                <li><a href="#" className="hover:text-[#FAC67A] transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>123 Green Street, City</li>
                <li>+91 98765 43210</li>
                <li>info@plantzavenue.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Plantz Avenue | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Demo Badge */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl p-4 max-w-xs z-50 border-2 border-[#1A4D2E]">
        <p className="text-sm font-semibold text-[#1A4D2E] mb-2">🌿 Plant Store Template</p>
        <p className="text-xs text-gray-600 mb-3">
          Beautiful e-commerce design for plant shops. Fully customizable and ready to use!
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20the%20Plant%20Store%20template%20(₹8,000).%20Can%20you%20provide%20more%20details?"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#1A4D2E] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0F3A1F] transition"
        >
          Buy Template - ₹8,000
        </a>
        <Link
          href="/templates"
          className="block text-center mt-2 text-[#1A4D2E] text-xs hover:underline"
        >
          ← Back to Templates
        </Link>
      </div>
    </div>
  );
}

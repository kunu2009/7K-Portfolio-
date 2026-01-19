'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, Users, Calendar, Search } from 'lucide-react';

export default function HotelBookingPreview1() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const hotels = [
    {
      id: 1,
      name: 'Luxury Palace Hotel',
      location: 'Mumbai, India',
      rating: 4.8,
      reviews: 324,
      price: 8500,
      image: '🏨',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant']
    },
    {
      id: 2,
      name: 'Ocean View Resort',
      location: 'Goa, India',
      rating: 4.6,
      reviews: 287,
      price: 6200,
      image: '🌴',
      amenities: ['Beach Access', 'Water Sports', 'Bar', 'Gym']
    },
    {
      id: 3,
      name: 'Mountain Retreat',
      location: 'Himachal Pradesh, India',
      rating: 4.9,
      reviews: 412,
      price: 4800,
      image: '⛰️',
      amenities: ['Hiking', 'Bonfire', 'Hot Springs', 'Cafe']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-6xl flex items-center justify-center">🏨</div>
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold mb-2">7K HOSPITALITY</p>
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Hotel</h1>
          <p className="text-xl text-blue-100">Discover amazing accommodations at unbeatable prices</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto -mt-20 relative z-20 px-4">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <div className="grid md:grid-cols-5 gap-4 mb-4">
            {/* Check In */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Check In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Check Out */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Check Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Location</label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-8">Popular Hotels</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-6xl">
                {hotel.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold">{hotel.rating}</span>
                  <span className="text-slate-400 text-sm">({hotel.reviews} reviews)</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-slate-700 px-3 py-1 rounded-full text-slate-300">
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">from</p>
                    <p className="text-2xl font-bold text-blue-400">₹{hotel.price.toLocaleString()}</p>
                    <p className="text-xs text-slate-400">per night</p>
                  </div>
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto px-4 mt-20 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Book With Us?</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '💰', title: 'Best Price Guarantee', desc: 'Lowest rates on the web' },
            { icon: '⭐', title: 'Verified Reviews', desc: 'Real guest reviews only' },
            { icon: '🔒', title: 'Secure Booking', desc: 'Safe payment processing' },
            { icon: '📞', title: '24/7 Support', desc: 'Always here to help' }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 text-center">
        <p className="text-sm text-blue-100 mb-4">
          This is a template demo. Ready to build your own hotel booking platform?
        </p>
        <a
          href="https://wa.me/918591247148?text=Hi%20Kunal%2C%20I'm%20interested%20in%20the%20hotel%20booking%20template"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
        >
          💬 Get This Template
        </a>
      </div>
    </div>
  );
}

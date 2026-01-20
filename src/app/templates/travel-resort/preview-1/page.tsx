'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Users, Search, Phone, Mail, Heart, Star, Globe, Award, Users2, TrendingUp, ArrowRight, ChevronRight, Sparkles, Plane, Anchor, Waves, Wind, Zap } from 'lucide-react';
import { DraggableCTA } from '@/components/draggable-cta';

export default function TravelResortTemplate() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState('2');
  const [favorites, setFavorites] = useState(new Set<string>());

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) newFavorites.delete(id);
    else newFavorites.add(id);
    setFavorites(newFavorites);
  };

  const destinations = [
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1551632786-de41ec16a91b?w=500&h=500&fit=crop', attractions: 'Coral Reefs, Water Villas, Diving' },
    { name: 'Bali', image: 'https://images.unsplash.com/photo-1523383579519-e21cc028cb29?w=500&h=500&fit=crop', attractions: 'Temples, Rice Paddies, Beaches' },
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453392763-c1f6d1d6b3bf?w=500&h=500&fit=crop', attractions: 'Burj Khalifa, Desert Safari, Shopping' },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=500&fit=crop', attractions: 'Eiffel Tower, Museums, Cuisine' },
    { name: 'London', image: 'https://images.unsplash.com/photo-1533929736992-8a5ac5d0d8a9?w=500&h=500&fit=crop', attractions: 'Big Ben, Museums, Royal Palaces' },
    { name: 'Thailand', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop', attractions: 'Beaches, Mountains, Street Food' },
  ];

  const resorts = [
    { name: 'Hyatt Regency Delhi', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop', rating: 4.8, reviews: 324 },
    { name: 'Radisson Blu Maldives', image: 'https://images.unsplash.com/photo-1584446300269-dccad30e2f12?w=400&h=300&fit=crop', rating: 4.9, reviews: 512 },
    { name: 'Novotel Bangkok', image: 'https://images.unsplash.com/photo-1542314503-37ab12005bcc?w=400&h=300&fit=crop', rating: 4.7, reviews: 428 },
    { name: '7K Bali Resort', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop', rating: 4.9, reviews: 356 },
    { name: 'Marriott Dubai', image: 'https://images.unsplash.com/photo-1566183938297-1c5e64f797b1?w=400&h=300&fit=crop', rating: 4.8, reviews: 489 },
    { name: '7K Paris Luxury', image: 'https://images.unsplash.com/photo-1551632786-de41ec16a91b?w=400&h=300&fit=crop', rating: 5.0, reviews: 267 },
  ];

  const activities = [
    { icon: Plane, name: 'Flight Bookings', desc: 'Discounted flights across 2000+ cities', color: 'text-blue-500' },
    { icon: Anchor, name: 'Cruise Tours', desc: 'Luxury cruise packages worldwide', color: 'text-purple-500' },
    { icon: Waves, name: 'Water Sports', desc: 'Diving, snorkeling, water activities', color: 'text-cyan-500' },
    { icon: Wind, name: 'Adventure Sports', desc: 'Skiing, climbing, paragliding', color: 'text-orange-500' },
    { icon: Sparkles, name: 'Local Tours', desc: 'Guided sightseeing experiences', color: 'text-yellow-500' },
    { icon: Zap, name: 'Event Planning', desc: 'Corporate & wedding packages', color: 'text-red-500' },
  ];

  const benefits = [
    { title: '7 Annual Vacation Days', desc: '30 years of vacation benefits', icon: Calendar },
    { title: 'Save Up to 40%', desc: 'Exclusive member discounts', icon: TrendingUp },
    { title: '200+ Destinations', desc: 'Hand-picked resorts worldwide', icon: Globe },
    { title: 'Priority Booking', desc: 'VIP early access to bookings', icon: Award },
  ];

  const testimonials = [
    { name: 'Kunal Singh', role: 'Entrepreneur', text: 'My trip to Maldives was absolutely magical! 7K Travel planned everything perfectly. The resort, activities, and service exceeded expectations. Best vacation ever! ❤️', avatar: '👨‍💼' },
    { name: 'Aditya Patel', role: 'MBA Graduate', text: 'Dubai trip through 7K Travel was fantastic! Everything from flights to hotel bookings was smooth. The desert safari was unforgettable. Highly recommend! 🏜️', avatar: '👨‍🎓' },
    { name: 'Priya Sharma', role: 'Designer', text: 'My family vacation to Bali was perfect! 7K Travel took care of everything. The beaches, temples, and guided tours were amazing. Can\'t wait for the next trip! 🏝️', avatar: '👩‍💼' },
    { name: 'Neha Verma', role: 'Doctor', text: 'Booked Paris trip with 7K Travel and it was a dream come true! The Eiffel Tower, museums, and local experiences were absolutely wonderful. Thank you! 🗼', avatar: '👩‍⚕️' },
  ];

  const stats = [
    { value: '50K+', label: 'Bookings Completed' },
    { value: '200+', label: 'Destinations' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '15K+', label: 'Happy Travelers' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1500595046891-f586f96a9db4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=300&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-md z-40 border-b border-blue-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Plane className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">7K Travel</div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#destinations" className="text-gray-300 hover:text-cyan-400 transition">Destinations</Link>
            <Link href="#resorts" className="text-gray-300 hover:text-cyan-400 transition">Resorts</Link>
            <Link href="#benefits" className="text-gray-300 hover:text-cyan-400 transition">Membership</Link>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Create Lifetime <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover 200+ hand-picked destinations, luxury resorts, and curated travel experiences. You pack, we plan!
          </p>

          {/* Search Widget */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <label className="text-xs text-gray-300 block mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-2">Check-in</label>
                <input
                  type="date"
                  className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-2">Check-out</label>
                <input
                  type="date"
                  className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-2">Guests</label>
                <select
                  className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6].map(n => <option key={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center justify-center gap-2">
                  <Search size={20} /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-blue-700/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">International Destinations</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg">Explore the world's most beautiful destinations with 7K Travel</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 border border-blue-700/30">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1">
                      <MapPin size={16} /> {dest.attractions}
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">
                  Explore <ChevronRight size={16} className="inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resorts */}
      <section id="resorts" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Premium Resort Partners</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg">Handpicked luxury properties for your perfect getaway</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resorts.map((resort, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur border border-blue-700/30 rounded-xl overflow-hidden hover:bg-white/10 transition group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={resort.image}
                    alt={resort.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{resort.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(resort.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'} />
                      ))}
                    </div>
                    <span className="text-yellow-400 font-semibold">{resort.rating}</span>
                    <span className="text-gray-400 text-sm">({resort.reviews} reviews)</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Complete Travel Services</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg text-center">Everything you need for your perfect vacation</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-blue-700/30 rounded-xl p-6 hover:border-cyan-500/50 transition group">
                  <div className={`${activity.color} mb-4 group-hover:scale-110 transition`}>
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                  <p className="text-gray-400">{activity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Exclusive Membership</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg text-center">Unlock premium benefits and save big on every trip</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Membership Card Display */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
            <div className="relative">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-sm opacity-80 mb-2">7K TRAVEL MEMBERSHIP</p>
                  <p className="text-2xl font-bold">PLATINUM CARD</p>
                </div>
                <div className="text-3xl font-bold">💳</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs opacity-80 mb-1">MEMBER NAME</p>
                  <p className="text-lg font-semibold">Kunal Singh</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-80 mb-1">VALID THRU</p>
                  <p className="text-lg font-semibold">12/30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Beautiful Moments</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-48 md:h-56 rounded-lg overflow-hidden group cursor-pointer border border-blue-700/30">
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Traveler Testimonials</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-y border-blue-700/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Explore the World?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of happy travelers and book your next adventure with 7K Travel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center justify-center gap-2">
              <Sparkles size={20} /> Browse Destinations
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-blue-700/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Plane className="text-white" size={24} />
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">7K Travel</div>
              </div>
              <p className="text-gray-400">Experience unforgettable travel moments with 7K Travel's premium services.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-cyan-400 transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition">Destinations</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition">Membership</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-cyan-400" />
                  <a href="tel:+918591247148" className="hover:text-cyan-400 transition">+91 8591 247 148</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" />
                  <a href="mailto:kunalchheda13@gmail.com" className="hover:text-cyan-400 transition">kunalchheda13@gmail.com</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition">f</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition">in</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700/30 pt-8">
            <p className="text-gray-400 text-center">© 2024 7K Travel. All Rights Reserved. | Design by Kunal & 7K Team</p>
          </div>
        </div>
      </footer>

      {/* Draggable CTA */}
      <DraggableCTA 
        price="₹10,000" 
        title="7K Travel Premium" 
        whatsappLink="https://wa.me/918591247148?text=Hi%20Kunal,%20I%20want%20to%20book%20a%20travel%20package%20with%207K%20Travel!"
        color="cyan"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Star, Phone, Mail, Clock, Wifi, Coffee, Dumbbell, Utensils, Car, Search, ChevronRight, Award, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LuxuryHotelTemplate() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("Deluxe Room");

  const specialOffers = [
    {
      title: "Family Discount",
      description: "Book 2 rooms and get 20% off on your total stay",
      image: "👨‍👩‍👧‍👦",
      discount: "20% OFF"
    },
    {
      title: "Couples Offer",
      description: "Romantic getaway package with complimentary spa",
      image: "💑",
      discount: "25% OFF"
    },
    {
      title: "Buy One Get One Free",
      description: "Stay 3 nights and get the 4th night absolutely free",
      image: "🎁",
      discount: "FREE NIGHT"
    }
  ];

  const activities = [
    {
      icon: "💡",
      title: "The Best Lighting",
      description: "A city long tour that a visitor will be entertained by the majestic city views and more"
    },
    {
      icon: "🏊",
      title: "The Best Swimming",
      description: "Professional swimming pool with crystal clear water and lifeguard on duty"
    }
  ];

  const rooms = [
    {
      image: "🏛️",
      title: "Presidential Suite",
      location: "Top Floor",
      price: "₹25,000"
    },
    {
      image: "🛏️",
      title: "Deluxe Ocean View",
      location: "5th Floor",
      price: "₹15,000"
    },
    {
      image: "⛰️",
      title: "Mountain Vista Room",
      location: "3rd Floor",
      price: "₹12,000"
    }
  ];

  const team = [
    { name: "Rajesh Kumar", role: "General Manager", image: "👨‍💼" },
    { name: "Priya Sharma", role: "Guest Relations", image: "👩‍💼" },
    { name: "Amit Patel", role: "Head Chef", image: "👨‍🍳" },
    { name: "Neha Singh", role: "Spa Director", image: "👩‍⚕️" }
  ];

  return (
    <div className="min-h-screen bg-[#1A1410] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1410]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-lg flex items-center justify-center">
                <span className="text-2xl">👑</span>
              </div>
              <div>
                <div className="text-xl font-bold">7K HOTELER</div>
                <div className="text-xs text-[#D4AF37]">Luxury Redefined</div>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#D4AF37] transition">HOME</a>
              <a href="#rooms" className="hover:text-[#D4AF37] transition">ROOMS & SUITES</a>
              <a href="#pages" className="hover:text-[#D4AF37] transition">PAGES</a>
              <a href="#news" className="hover:text-[#D4AF37] transition">NEWS</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition">CONTACT</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hover:text-[#D4AF37] transition">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-[#D4AF37] text-[#1A1410] px-6 py-2 rounded-md font-semibold hover:bg-[#B8942C] transition">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm pb-3 border-t border-[#D4AF37]/20 pt-3">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-gray-400">mail@7khoteler.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-gray-400">86 Berkley Golden Street, New York</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                Book Your Dream Hotel<br />
                with <span className="text-[#D4AF37]">7K Hoteler</span>.
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Experience unparalleled luxury and comfort.
              </p>
              <button className="bg-[#D4AF37] text-[#1A1410] px-10 py-4 rounded-md font-bold hover:bg-[#B8942C] transition text-lg">
                BOOK NOW
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[#2A1F1A] to-[#1A1410] flex items-center justify-center text-9xl">
                  🛏️
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="mt-16 bg-[#0F0A08] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#D4AF37]">CHECK IN</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#1A1410] border border-[#D4AF37]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                  <Calendar className="absolute right-3 top-3 w-5 h-5 text-[#D4AF37] pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#D4AF37]">CHECK OUT</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#1A1410] border border-[#D4AF37]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                  <Calendar className="absolute right-3 top-3 w-5 h-5 text-[#D4AF37] pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#D4AF37]">ROOM</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-[#1A1410] border border-[#D4AF37]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition"
                >
                  <option>Deluxe Room</option>
                  <option>Presidential Suite</option>
                  <option>Ocean View</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-[#D4AF37] text-[#1A1410] py-3 rounded-lg font-bold hover:bg-[#B8942C] transition">
                  CHECK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0A08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-semibold mb-2">DON'T MISS THE OFFERS</p>
            <h2 className="text-5xl font-serif mb-4">Get Our Special Offer.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2A1F1A] to-[#1A1410] flex items-center justify-center text-8xl">
                  {offer.image}
                </div>
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1A1410] px-4 py-2 rounded-full font-bold text-sm">
                  {offer.discount}
                </div>
                <div className="p-6 bg-[#1A1410]/95 backdrop-blur">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-400 mb-4">{offer.description}</p>
                  <button className="text-[#D4AF37] font-semibold hover:underline inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#D4AF37] font-semibold mb-4">HOTELER LUXURY HOTEL</p>
              <h2 className="text-5xl font-serif mb-6">
                We Provide Outdoor<br />Activities To All Visitors
              </h2>
              <p className="text-gray-400 mb-8">
                San Francisco has hills with views, the coast, excellent food & is also home to the biggest. Tourisland and forest city in the states and many more.
              </p>

              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                      <p className="text-gray-400">{activity.description}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <span>✓ A city long tour that a visitor will be entertained by the majestic</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <span>✓ We provide high quality and professional service and relax</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <span>✓ There are many variations of Lorem ipsum majorly</span>
                </div>
              </div>

              <button className="mt-8 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-[#1A1410] transition">
                DISCOVER MORE
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30">
                <div className="w-full h-full bg-gradient-to-br from-[#2A1F1A] to-[#1A1410] flex items-center justify-center text-9xl">
                  🏰
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Rooms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0A08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-semibold mb-2">OUR CUSTOMER SERVICES</p>
            <h2 className="text-5xl font-serif mb-4">
              Book your stay and<br />relax in luxury
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2A1F1A] to-[#1A1410] flex items-center justify-center text-8xl">
                  {room.image}
                </div>
                <div className="p-6 bg-[#1A1410]/95">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{room.title}</h3>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{room.location}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-[#D4AF37]">{room.price}</span>
                      <span className="text-gray-400 text-sm">/night</span>
                    </div>
                    <button className="bg-[#D4AF37] text-[#1A1410] px-6 py-2 rounded-md font-semibold hover:bg-[#B8942C] transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-semibold mb-2">OUR TEAM</p>
            <h2 className="text-5xl font-serif mb-4">Expert Team Persons</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[#2A1F1A] to-[#1A1410] flex items-center justify-center text-8xl">
                  {member.image}
                </div>
                <div className="p-6 bg-[#1A1410]/95 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0A08]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Stay updated with our latest offers and news</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-6 py-4 bg-[#1A1410] border border-[#D4AF37]/30 rounded-lg focus:outline-none focus:border-[#D4AF37] transition flex-1 max-w-md"
            />
            <button className="bg-[#D4AF37] text-[#1A1410] px-10 py-4 rounded-lg font-bold hover:bg-[#B8942C] transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0604] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-lg flex items-center justify-center">
                  <span className="text-xl">👑</span>
                </div>
                <span className="text-xl font-bold">7K HOTELER</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Experience luxury and comfort at its finest. Your dream stay awaits.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37]">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition">About Us</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Our Rooms</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Services</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37]">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2"><Wifi className="w-4 h-4" /><span>Free WiFi</span></li>
                <li className="flex items-center space-x-2"><Coffee className="w-4 h-4" /><span>Restaurant</span></li>
                <li className="flex items-center space-x-2"><Dumbbell className="w-4 h-4" /><span>Fitness Center</span></li>
                <li className="flex items-center space-x-2"><Car className="w-4 h-4" /><span>Valet Parking</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37]">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>86 Berkley Golden Street</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>mail@7khoteler.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#D4AF37]/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 7K Hoteler | Powered by 7K Creative Solutions | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Demo Badge */}
      <div className="fixed bottom-4 right-4 bg-[#0F0A08] rounded-lg shadow-2xl p-4 max-w-xs z-50 border-2 border-[#D4AF37]">
        <p className="text-sm font-semibold text-[#D4AF37] mb-2">👑 Luxury Hotel Template</p>
        <p className="text-xs text-gray-400 mb-3">
          Premium hotel website with elegant gold theme. Perfect for luxury hotels and resorts!
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20the%20Luxury%20Hotel%20template%20(₹10,000).%20Can%20you%20provide%20more%20details?"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#D4AF37] text-[#1A1410] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#B8942C] transition"
        >
          Buy Template - ₹10,000
        </a>
        <Link
          href="/templates"
          className="block text-center mt-2 text-[#D4AF37] text-xs hover:underline"
        >
          ← Back to Templates
        </Link>
      </div>
    </div>
  );
}

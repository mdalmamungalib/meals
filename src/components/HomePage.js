"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    // Handle subscription logic here
  };

  return (
    <div >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2023/03/11/22/19/nature-7845443_1280.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-gray-200 mb-8">Discover the best products and services tailored just for you.</p>
          <Link href="/about">
            <p className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition duration-300">Learn More</p>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">Detailed description of the first feature.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">Detailed description of the second feature.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">Detailed description of the third feature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Service One</h3>
              <p className="text-gray-100">Brief description of service one.</p>
            </div>
            <div className="bg-indigo-500 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Service Two</h3>
              <p className="text-gray-100">Brief description of service two.</p>
            </div>
            <div className="bg-teal-500 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Service Three</h3>
              <p className="text-gray-100">Brief description of service three.</p>
            </div>
            <div className="bg-purple-500 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Service Four</h3>
              <p className="text-gray-100">Brief description of service four.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"Excellent service and amazing products!"</p>
              <h3 className="text-xl font-semibold text-gray-800">Customer One</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"Highly recommend this company!"</p>
              <h3 className="text-xl font-semibold text-gray-800">Customer Two</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"Fantastic experience from start to finish."</p>
              <h3 className="text-xl font-semibold text-gray-800">Customer Three</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest news and offers.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 rounded-lg text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default HomePage;

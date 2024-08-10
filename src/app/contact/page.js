// src/app/contact/page.js

import GoogleMap from '@/components/GoogleMap';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black pt-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-green-600 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="https://d31fl6kv41tqjh.cloudfront.net/v2/pages/_1200x630_crop_center-center_82_none/408561/DALL%C2%B7E-2024-05-08-14.45.07-A-modern-office-environment-where-AI-driven-systems-are-integrated-into-everyday-operations.-The-office-features-diverse-employees-interacting-with-va_2024-05-21-121346_xuoq.jpg?mtime=1716293626.png" // Replace with your background image
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl mb-8">We'd love to hear from you. Reach out to us using the form below or via our contact details.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Form */}
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="w-full md:w-1/2 p-6 bg-gray-50">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Feel free to reach out to us through any of the following methods:
                </p>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Business Ave, Suite 456<br />
                    New York, NY 10001
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">contact@yourcompany.com</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Social Media</h3>
                  <p className="text-gray-600">
                    <a href="https://twitter.com/yourcompany" className="text-teal-500 hover:underline">Twitter</a> | 
                    <a href="https://facebook.com/yourcompany" className="text-teal-500 hover:underline"> Facebook</a> |
                    <a href="https://linkedin.com/company/yourcompany" className="text-teal-500 hover:underline"> LinkedIn</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-6">Find Us</h2>
            <div className="relative w-full h-96">
              <GoogleMap/>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
          <p className="text-lg mb-8">
            Have any questions or need assistance? Don't hesitate to contact us.
          </p>
          <button className="bg-white text-teal-500 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

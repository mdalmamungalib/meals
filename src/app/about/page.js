
import Image from 'next/image';

const AboutPage = async () => { 

  return (
    <div className="min-h-screen bg-gray-100 text-black pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="https://webostv.developer.lge.com/images/hero-background.svg" // Replace with your background image
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl mb-8">Learn more about our story, mission, and values.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700">
              Our company was founded with a vision to create innovative solutions and deliver exceptional services. Our team of experts is dedicated to providing top-notch results and exceeding client expectations.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://st3.depositphotos.com/14431644/32082/i/450/depositphotos_320823134-stock-photo-conceptual-hand-writing-showing-our.jpg" // Replace with your image
                  alt="Company Image 1"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To innovate and provide solutions that empower our clients and enrich the communities we serve.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://www.cultureworkshr.com/wp-content/uploads/2022/09/iStock-1134456412-1030x687.jpg" // Replace with your image
                  alt="Company Image 2"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Integrity, Excellence, Innovation, and Customer Satisfaction are at the core of everything we do.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61OZSmdo0-feQYNfOaPu6daYESWBDNa_lZQ&s.png" // Replace with your image
                  alt="Company Image 3"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                  <p className="text-gray-600">
                    We approach every project with a collaborative mindset, leveraging our expertise to deliver tailored solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s.png" // Replace with your image
                  alt="Team Member 1"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuUwExMndJ0IioFnec42P_uyo-kr6LJ3LAA&s.jpg" // Replace with your image
                  alt="Team Member 2"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_12ffm1d7Z5lxa3xetJm2g1oU5_x9q1S26A&s.png" // Replace with your image
                  alt="Team Member 3"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VDM5UUxIc9xyFro7mq2KBr-V4mIxvc06pA&s.png" // Replace with your image
                  alt="Team Member 4"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Michael Brown</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-8">
            If you share our passion for innovation and excellence, we would love to hear from you.
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

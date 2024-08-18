import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "About",
  description: "Learn more about our company, mission, and values.",
  keywords: ["about", "company", "mission", "values"],
};

const AboutPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <div className="min-h-screen pt-10 text-black bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-r from-blue-500 to-indigo-600">
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
        <div className="container relative z-10 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-extrabold">About Us</h1>
          <p className="mb-8 text-xl">
            Learn more about our story, mission, and values.
          </p>
          <button className="px-6 py-3 text-blue-600 transition duration-300 bg-white rounded-md shadow-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-gray-700">
              Our company was founded with a vision to create
              innovative solutions and deliver exceptional services.
              Our team of experts is dedicated to providing
              top-notch results and exceeding client expectations.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <Image
                  src="https://st3.depositphotos.com/14431644/32082/i/450/depositphotos_320823134-stock-photo-conceptual-hand-writing-showing-our.jpg" // Replace with your image
                  alt="Company Image 1"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To innovate and provide solutions that empower
                    our clients and enrich the communities we serve.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <Image
                  src="https://www.cultureworkshr.com/wp-content/uploads/2022/09/iStock-1134456412-1030x687.jpg" // Replace with your image
                  alt="Company Image 2"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Our Values
                  </h3>
                  <p className="text-gray-600">
                    Integrity, Excellence, Innovation, and Customer
                    Satisfaction are at the core of everything we
                    do.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-8 lg:w-1/3">
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61OZSmdo0-feQYNfOaPu6daYESWBDNa_lZQ&s.png" // Replace with your image
                  alt="Company Image 3"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Our Approach
                  </h3>
                  <p className="text-gray-600">
                    We approach every project with a collaborative
                    mindset, leveraging our expertise to deliver
                    tailored solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
              <div className="p-6 text-center bg-gray-100 rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s.png" // Replace with your image
                  alt="Team Member 1"
                  width={200}
                  height={200}
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
              <div className="p-6 text-center bg-gray-100 rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuUwExMndJ0IioFnec42P_uyo-kr6LJ3LAA&s.jpg" // Replace with your image
                  alt="Team Member 2"
                  width={200}
                  height={200}
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold">
                  Jane Smith
                </h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
              <div className="p-6 text-center bg-gray-100 rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_12ffm1d7Z5lxa3xetJm2g1oU5_x9q1S26A&s.png" // Replace with your image
                  alt="Team Member 3"
                  width={200}
                  height={200}
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold">
                  Emily Johnson
                </h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
            </div>
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
              <div className="p-6 text-center bg-gray-100 rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VDM5UUxIc9xyFro7mq2KBr-V4mIxvc06pA&s.png" // Replace with your image
                  alt="Team Member 4"
                  width={200}
                  height={200}
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold">
                  Michael Brown
                </h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-white bg-blue-500">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Join Us Today!
          </h2>
          <p className="mb-8 text-lg">
            If you share our passion for innovation and excellence,
            we would love to hear from you.
          </p>
          <button className="px-6 py-3 text-blue-500 transition duration-300 bg-white rounded-md shadow-md hover:bg-gray-100">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">BrandName</h1>
            <p className="mt-2 text-gray-400">Your tagline or description goes here.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-lg font-semibold mb-2">Company</h2>
              <Link href="/" className="text-gray-400 hover:text-white mb-1">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white mb-1">About</Link>
              <Link href="/services" className="text-gray-400 hover:text-white mb-1">Services</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </div>

            <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.4c0-5.5-4.5-10-10-10S2 6.9 2 12.4c0 4.9 3.6 8.9 8.4 9.9v-7h-2.5v-2.5h2.5v-1.9c0-2.5 1.5-4.1 3.8-4.1 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.5h-2.4v7c4.8-1.1 8.4-5 8.4-9.9z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 5.8c-.8.4-1.7.7-2.7.8 1-.6 1.8-1.6 2.1-2.8-.9.5-1.9.9-3 1.1-.8-.9-1.9-1.4-3.1-1.4-2.4 0-4.4 2-4.4 4.4 0 .3.1.7.2 1.1-3.7-.2-7-2-9.2-9-9.6-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 1.9 3.8-1.1 0-2.2-.3-3.1-.8v.1c0 2.2 1.5 4.1 3.5 4.5-.4.1-.8.2-1.3.2-.3 0-.7 0-1-.1.7 2.2 2.7 3.8 5.1 3.9-1.8 1.4-4 2.3-6.4 2.3-.4 0-.8 0-1.1-.1 2.2 1.4 4.7 2.2 7.5 2.2 9.1 0 14.1-7.6 14.1-14.2 0-.2 0-.4-.1-.6.9-.7 1.6-1.6 2.2-2.7z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.6 2C6.7 2 6 2.7 6 3.6v16.8c0 .9.7 1.6 1.6 1.6h8.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6H7.6zM12 6.6c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4zm0 7.8c1.9 0 3.4-1.5 3.4-3.4 0-1.9-1.5-3.4-3.4-3.4-1.9 0-3.4 1.5-3.4 3.4 0 1.9 1.5 3.4 3.4 3.4zm4.1-9.4h.1c.4 0 .8.4.8.8v.2c0 .4-.4.8-.8.8h-.2c-.4 0-.8-.4-.8-.8v-.2c0-.4.4-.8.8-.8zM12 3.6c-3.3 0-6 2.7-6 6v10.8c0 3.3 2.7 6 6 6h10.8c3.3 0 6-2.7 6-6V9.6c0-3.3-2.7-6-6-6H12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Meals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

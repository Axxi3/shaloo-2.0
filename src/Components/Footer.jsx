import React from 'react';
import logo from "../assets/logowhite.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 font-urbanist">
      <div className="container mx-auto px-4">
        {/* Top navigation */}
        <div className="flex justify-center mb-8">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li><a href="https://www.treysta.ae/" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="https://www.treysta.ae/blogs" className="hover:text-gray-300 transition-colors">Blog</a></li>
              <li><a href="https://www.treysta.ae/contact-us" className="hover:text-gray-300 transition-colors">Contact Me</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>
        
        {/* Bottom section with logo, copyright, and social icons */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <a href="/">
              <img 
                src={logo}
                alt="Logo" 
                className="h-10"
                style={{ filter: 'brightness(0) invert(1)' }} // Makes the logo white if it's not already
              />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
          <a
  href="https://api.whatsapp.com/send?phone=916000831966&text=Hey%20i%20saw%20buzzspear%20website%2C%20I%20am%20looking%20for%20something%20similar.%20Can%20we%20discuss%3F" // Replace with the actual URL
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 sm:mt-4 text-yellow-400 hover:underline" // Added styling
>
  Made with <span className="text-red-500">❤️</span> by Anurag
</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-setiya-4a408369" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

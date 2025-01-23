import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', }} className="py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

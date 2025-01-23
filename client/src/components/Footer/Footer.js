import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', }} className="py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

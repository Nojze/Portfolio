import React from 'react';

const Footer = () => (
  <footer className="flex justify-center items-center w-full h-20 md:h-16 mt-12">
    <p className="text-lg">Niklas Rydkvist © {new Date().getFullYear().toString()}</p>
  </footer>
);

export default Footer;

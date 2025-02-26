import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const navLinks = [
    { text: "Home", to: "home" },
  { text: "About", to: "about" },
  { text: "Vision Plan", to: "vision-plan" },
  { text: "Services", to: "services" },
  { text: "Projects", to: "projects" },
  { text: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-[#2C3E50] text-[#00FFAB] py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-sm md:text-base">
          &copy; 2024 Astral Solutions - All Rights Reserved
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-[#20B2AA] cursor-pointer"
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

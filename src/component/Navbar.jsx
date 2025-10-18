import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoWhite from "../assets/Certify_logo-white.svg";
import LogoBlack from "../assets/Certify_logo-black.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Feature", href: "#feature" },
    { label: "About us", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm bg-primary-white">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center h-[80px] px-[120px] bg-primary-white shadow-sm">
        <img src={LogoBlack} alt="logo" className="h-[60px]" />
        <div className="flex gap-10 text-[18px] font-Roboto text-primary-black">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-primary-500 group-active:text-primary-700 font-medium">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden bg-[#3E5948] text-primary-white px-[16px] sm:px-[24px] md:px-[48px] py-4 shadow-md">
        <div className="flex justify-between items-center">
          <img src={LogoWhite} alt="logo" className="h-[50px]" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 text-[18px] font-inter">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-primary-100 active:text-white transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

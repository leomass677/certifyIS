import React from "react";
import LogoWhite from "../assets/Certify_logo-white.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-primary-700 mt-20 text-primary-white py-10 px-[16px] sm:px-[24px] md:px-[48px] lg:px-[120px] font-Dm-sans"
    >
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-20">
        {/* Branding */}
        <div className="lg:flex-1">
          <img src={LogoWhite} alt="Certify Logo" className="w-32 mb-4" />
          <h3 className="text-xl font-medium mb-2 font-Dm-sans">
            Transforming Nigeria's Certification Landscape
          </h3>
          <p className="text-sm text-grey-100 font-inter leading-relaxed">
            Through innovative digital solutions, Certify empowers government
            agencies, institutions, and individuals with secure document
            verification.
          </p>
        </div>

        {/* Services & Company */}
        <div className="lg:flex-1 flex flex-col sm:flex-row justify-between gap-10 sm:gap-20">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-grey-200 text-sm">
              <li>
                <a href="#indigenous-certificates" className="hover:underline">
                  Indigenous Certificates
                </a>
              </li>
              <li>
                <a href="#birth-certificates" className="hover:underline">
                  Birth Certificate
                </a>
              </li>
              <li>
                <a href="#university-certificates" className="hover:underline">
                  University Certificates
                </a>
              </li>
              <li>
                <a href="#professional-licenses" className="hover:underline">
                  Professional Licenses
                </a>
              </li>
              <li>
                <a href="#government-document" className="hover:underline">
                  Government Document
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-grey-200 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#feature" className="hover:underline">
                  Feature
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t font-inter border-grey-50 pt-6 text-center font-light text-primary-white text-sm">
        © 2025 Certify. All Rights Reserved. Empowering Nigeria’s Digital
        Future.
      </div>
    </motion.footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import Illustration from "../assets/ILLUSTRATION-1.png";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-[82px] lg:pt-[90px] flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center px-[16px] sm:px-[24px] md:px-[48px] lg:px-[120px] gap-[24px] w-full min-h-screen overflow-hidden"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full pt-6 md:pb-0 lg:w-1/2"
      >
        <img
          src={Illustration}
          alt="Illustration"
          className="w-full h-auto object-cover rounded-lg"
          loading="eager" // show image immediately
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-full lg:w-1/2 flex flex-col gap-[16px] text-start lg:text-left"
      >
        <h1 className="text-[42px] md:text-[48px] lg:text-[56px] font-Dm-sans leading-snug font-medium text-primary-dark">
          Digitalize Nigeria&apos;s Certification System
        </h1>
        <p className="text-[16px] md:text-[18px] break-words text-gray-600 leading-normal font-normal font-inter">
          Secure, efficient, and transparent digital certification platform for
          Indigenous certificates, birth certificates, university degrees, and
          more. Revolutionizing document verification across Nigeria.
        </p>
        <a
          href="#contact"
          className="bg-blue text-center hover:scale-105 text-primary-white cursor-pointer px-8 py-4 rounded-md w-full sm:w-auto mx-auto lg:mx-0 hover:bg-[#1B4079] transition-all active:bg-[#122B51] duration-500 ease-in-out"
        >
          Get started
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

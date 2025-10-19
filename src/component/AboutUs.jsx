import React, { useRef } from "react";
import { motion } from "framer-motion";
import ceo_1 from "../assets/CEO.png";
import ceo_2 from "../assets/CEO-2.png";
import icons from "./icons";

const AboutUs = () => {
  const card = [
    {
      icon: icons.award,
      heading: "Award Winning",
      sub_Heading: "Recognized innovation leader",
    },
    {
      icon: icons.shield,
      heading: "Secure & Reliable",
      sub_Heading: "Bank-level security protocols",
    },
    {
      icon: icons.verify,
      heading: "Verified Accuracy",
      sub_Heading: "99.9% verification accuracy rate",
    },
  ];
  const divRef = useRef(null);
  const handleScroll = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-8 lg:py-4 px-[16px] sm:px-[24px] md:px-[48px] lg:px-[120px] relative"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-[24px]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col flex-1 gap-3 lg:min-w-[500px]"
        >
          <h3 className="text-3xl font-bold text-primary-dark font-Tinos">
            Transforming Nigeria's Digital Infrastructure
          </h3>
          <div className="flex wrap-break-word flex-col gap-3 text-[15px] leading-relaxed text-primary-dark">
            <p>
              Certify is at the forefront of Nigeria's digital transformation,
              providing cutting-edge certification solutions that bridge the gap
              between traditional paper-based systems and modern digital
              verification needs.
            </p>
            <p>
              Our platform serves government agencies, educational institutions,
              employers, and individuals by creating a unified, secure, and
              efficient ecosystem for document verification across Nigeria.
            </p>
          </div>
          <div className="flex gap-4 w-full">
            <a
              href="#contact"
              className="px-6 py-3 text-center bg-blue text-white rounded-md hover:bg-[#1B4079] active:bg-[#122B51] transition-all duration-500 ease-in-out w-full sm:w-auto cursor-pointer"
            >
              Get Started
            </a>

            <button
              onClick={handleScroll}
              className="px-6 py-2 border-2 relative bg-primary-white font-medium  text-grey-700 border-grey-500 rounded-md hover:border-primary-600  w-full cursor-pointer sm:w-auto hover:bg-primary-500 hover:text-primary-white active:bg-primary-700 transition-all duration-500 "
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col flex-1 lg:mt-23 p-6 flex-grow shadow-sm bg-primary-white justify-center rounded-xl border border-primary-50 gap-4"
        >
          {card.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-[40px] h-[40px] bg-primary-100 rounded-[8px] flex items-center justify-center text-xl">
                <img
                  src={item.icon}
                  alt={item.icon}
                  className="w-[35px] object-center"
                />
              </div>
              <div className="text-sm">
                <h5 className="text-base text-[14px] text-primary-dark font-Dm-sans font-semibold">
                  {item.heading}
                </h5>
                <p className="text-grey-700 font-inter text-[14px]">
                  {item.sub_Heading}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Leadership Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col md:flex-row mt-16 gap-[4px] md:gap-[24px]"
        id="leadership"
        ref={divRef}
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 flex-1 relative "
        >
          <img
            src={ceo_2}
            alt="CEO 2"
            className="rounded-lg w-full h-auto px-[1px] md:px-0 object-cover shadow-sm"
          />
          <div className="bg-primary-white -translate-y-8 md:-translate-0 shadow-md cursor-pointer rounded-lg py-6 px-6 group border border-grey-100 hover:scale-102 transition-all duration-300 ease-in">
            <h3 className="text-lg font-semibold text-primary-dark mb-2 font-inter relative lg:mb-2">
              Leadership
              <span className="absolute left-0 -bottom-1 w-6 h-[2px] bg-primary-500 group-hover:w-full transition-all duration-500"></span>
            </h3>
            <p className="text-sm font-Roboto font-normal text-[16px] text-gray-700 wrap-break-word leading-snug">
              Qamar Ahmed, the Founder and CEO of Certify Integrated Solutions,
              leads with a bold vision rooted in innovation, integrity, and
              national impact. Under his leadership, Certify continues to
              pioneer Nigeria’s digital transformation, bridging traditional
              systems with cutting-edge certification technology.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex-grow"
        >
          <img
            src={ceo_1}
            alt="CEO 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

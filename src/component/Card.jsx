import React from "react";
import { motion } from "framer-motion";

const Card = ({ cardImg, heading, list_items, sub_Heading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col gap-[12px] px-[24px] lg:px-[16px] py-[24px] lg:py-[16px] bg-primary-white hover:bg-primary-800 rounded-xl shadow-md border-2 border-transparent hover:border-grey-50 hover:shadow-lg hover:scale-[1.02] hover:rounded-2xl transition-all duration-500 group cursor-pointer lg:max-w-[384px]"
    >
      {/* Icon */}
      <div className="size-[48px] bg-gradient-to-tr from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
        {cardImg ? (
          <img src={cardImg} alt={heading} className="w-[40px] object-cover" />
        ) : (
          <span className="text-xl">📄</span>
        )}
      </div>

      {/* Heading */}
      <h5 className="text-[16px] font-semibold text-primary-dark font-inter relative group-hover:text-primary-white transition duration-300">
        {heading}
        <span className="absolute left-0 -bottom-1 w-6 h-[2px] bg-primary-500 group-hover:w-full transition-all duration-500"></span>
      </h5>

      {/* Subheading */}
      <p className="text-[14px] font-Dm-sans font-medium text-grey-500 leading-4.5 group-hover:text-primary-white transition duration-300">
        {sub_Heading}
      </p>

      {/* List Items */}
      <ul className="flex flex-col gap-1 text-[14px]">
        {list_items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[8px] text-primary-600 group-hover:text-primary-800 transition duration-300"
          >
            <span className="bg-primary-700 group-hover:bg-primary-50 rounded-full size-2"></span>
            <span className="font-Dm-sans text-[14px] font-medium text-grey-700 group-hover:text-grey-50 transition duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Card;

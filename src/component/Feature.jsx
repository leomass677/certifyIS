import React from "react";
import { motion } from "framer-motion";
import icons from "./icons";

const Feature = () => {
  const card = [
    {
      cardImg: icons.lock,
      heading: "Blockchain Security",
      sub_Heading:
        "Immutable records with military-grade encryption ensuring document integrity.",
    },
    {
      cardImg: icons.lightning,
      heading: "Instant Verification",
      sub_Heading:
        "Real-time document verification in seconds, not days or weeks.",
    },
    {
      cardImg: icons.analysis,
      heading: "Data Analytics",
      sub_Heading:
        "Comprehensive insights and reporting for better decision making.",
    },
    {
      cardImg: icons.stars,
      heading: "API Integration",
      sub_Heading:
        "Seamless integration with existing systems and third-party applications.",
    },
  ];

  const cardFeature = [
    {
      heading: "500K+",
      sub_Heading: "Certificates Verified",
    },
    {
      heading: "150+",
      sub_Heading: "Partner Institutions",
    },
    {
      heading: "99.9%",
      sub_Heading: "Uptime Guarantee",
    },
    {
      heading: "24/7",
      sub_Heading: "Support Available",
    },
  ];

  return (
    <section
      id="feature"
      className="py-8 lg:pt-4 lg:mt-20 px-[16px] sm:px-[24px] md:px-[48px] lg:px-[120px]"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark font-Tinos">
          Why Choose Certify?
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mt-2">
          Advanced technology meets Nigerian needs for secure, efficient
          document verification
        </p>
      </div>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
      >
        {card.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col cursor-pointer items-center border border-gray-100 text-center gap-2 p-6 bg-primary-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="p-[14px] bg-primary-50 rounded-full flex items-center justify-center">
              <img
                src={item.cardImg}
                alt=""
                className="object-cover h-[40px]"
              />
            </div>
            <h5 className="text-[16px] font-semibold text-primary-dark font-inter">
              {item.heading}
            </h5>
            <p className="text-[14px] text-grey-700 leading-tight font-Dm-sans font-medium">
              {item.sub_Heading}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-primary-700 text-primary-white py-12 px-4 sm:px-6 md:px-14 rounded-xl text-center"
      >
        {cardFeature.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 lg:gap-1">
            <h3 className="text-3xl/relaxed font-bold font-Dm-sans">
              {item.heading}
            </h3>
            <p className="text-md font-inter font-medium">{item.sub_Heading}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feature;

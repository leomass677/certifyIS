import React from "react";
import Card from "./Card";
import icons from "./icons";
import { motion } from "framer-motion";

const Services = () => {
  const cardData = [
    {
      cardImg: icons.map_marker,
      heading: "Indigenous Certificates",
      sub_Heading:
        "Digitally verify local government and traditional authority documents to confirm indigenous status.",
      list_items: [
        "State of Origin Verification",
        "Local Government Authentication",
        "Traditional Authority Validation",
      ],
    },
    {
      cardImg: icons.user,
      heading: "Birth Certificates",
      sub_Heading:
        "Secure digital access to birth records for identity verification and legal documentation.",
      list_items: [
        "National Population Registry Integration",
        "Hospital Birth Record Sync",
        "Parental Identity Linkage",
      ],
    },
    {
      cardImg: icons.graduating,
      heading: "University Certificates",
      sub_Heading:
        "Authenticate academic qualifications with blockchain-backed verification from accredited institutions.",
      list_items: [
        "Degree Validation",
        "Transcript Authentication",
        "Institutional Accreditation Check",
      ],
    },
    {
      cardImg: icons.shield,
      heading: "Professional Licenses",
      sub_Heading:
        "Verify professional credentials and licenses for regulated industries and career advancement.",
      list_items: [
        "Medical & Legal License Checks",
        "Industry Board Integration",
        "Renewal & Expiry Tracking",
      ],
    },
    {
      cardImg: icons.file,
      heading: "Government Documents",
      sub_Heading:
        "Digitize and validate official government-issued documents for secure public service access.",
      list_items: [
        "National ID Verification",
        "Tax & Pension Records",
        "Driver’s License Authentication",
      ],
    },
    {
      cardImg: icons.setting,
      heading: "Custom Solutions",
      sub_Heading:
        "Tailored certification systems for private organizations, NGOs, and international partners.",
      list_items: [
        "API Integration",
        "Custom Document Templates",
        "Multi-level Access Control",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="px-[16px] py-8 lg:py-4 sm:px-[24px] md:px-[48px] lg:px-[120px]"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark font-Tinos">
          Our Certification Services
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mt-2">
          Comprehensive digital certification solutions tailored for Nigerian
          institutions and individuals.
        </p>
      </div>

      <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card
              cardImg={card.cardImg}
              heading={card.heading}
              sub_Heading={card.sub_Heading}
              list_items={card.list_items}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

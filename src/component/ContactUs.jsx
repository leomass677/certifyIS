import React from "react";
import ContactForm from "./ContactForm";
import icons from "./icons";

const ContactUs = () => {
  return (
    <section id="contact" className="py-8  px-4 sm:px-6 md:px-12 lg:px-32">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark font-Tinos">
          Get Started Today
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mt-2">
          Ready to digitalize your certification process? Contact our team for a
          personalized consultation.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mt-12">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <h3 className="text-[24px] font-semibold text-grey-700 font-Roboto ">
            Contact Us
          </h3>
          <div className="text-sm text-gray-800 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-[40px] h-[40px] bg-primary-100 rounded-[8px] flex justify-center items-center flex-shrink-0">
                <img
                  src={icons.printer}
                  alt={icons.printer}
                  className="w-[30px] "
                />
              </div>{" "}
              <div>
                <p className="font-semibold text-gray-700">Office Address</p>
                <p className="text-gray-500 font-medium capitalize">
                  Plot 502, Dalaba Street, Novare Central, Wuse Zone 5, Abuja,
                  FCT, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-[40px] h-[40px] bg-primary-100 rounded-[8px] flex justify-center items-center flex-shrink-0">
                <img src={icons.phone} alt={icons.phone} className="w-[30px]" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">Phone Numbers</p>
                <p className="text-gray-500 font-medium">
                  +234 (0) 708 833 0328 <br />
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-[40px] h-[40px] bg-primary-100 rounded-[8px] flex justify-center items-center flex-shrink-0">
                <img src={icons.mail} alt={icons.mail} className="w-[30px]" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email Addresses</p>
                <p className="text-gray-500 font-medium">
                  certifyintegratedsolution@outlook.com{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

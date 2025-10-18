import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    service: "",
    customService: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.service) newErrors.service = "Please select a service";
    if (
      formData.service === "custom-solutions" &&
      !formData.customService.trim()
    ) {
      newErrors.customService = "Please describe your custom service";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");

    const contactParams = {
      title: formData.service,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
    };

    const autoReplyParams = {
      to_name: formData.firstName,
      to_email: formData.email,
    };

    // Send to Certify (you)
    emailjs
      .send(
        "service_rn7u4zq",
        "template_tvjm9j1",
        contactParams,
        "ghKmcJ06QiJB5NRox"
      )
      .then(() => {
        // Send auto-reply to user
        emailjs
          .send(
            "service_rn7u4zq",
            "template_130da3f",
            autoReplyParams,
            "ghKmcJ06QiJB5NRox"
          )
          .then(() => {
            setStatus("✅ Message sent and auto-reply delivered!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              organization: "",
              service: "",
              customService: "",
              message: "",
            });
            setErrors({});
          })
          .catch(() => {
            setStatus("✅ Message sent, but auto-reply failed.");
          });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-4 lg:p-6 bg-white rounded-md shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-blue">
        Send Us A Message
      </h2>

      {/* First Name */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
        />
      </div>

      {/* Service Interest */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          Service Interest
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 w-full text-gray-900 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
        >
          <option
            value=""
            className="bg-primary-700 text-primary-white cursor-poainter"
          >
            Select a Service
          </option>
          <option value="indigenous-certificates" className="">
            Indigenous Certificates
          </option>
          <option value="birth-certificates">Birth Certificates</option>
          <option value="university-certificates">
            University Certificates
          </option>
          <option value="professional-licenses">Professional Licenses</option>
          <option value="government-document">Government Document</option>
          <option value="custom-solutions">Custom Solutions</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1">{errors.service}</p>
        )}
      </div>

      {/* Custom Service */}
      {formData.service === "custom-solutions" && (
        <div>
          <label className="block text-xs font-medium text-gray-600">
            Describe Custom Service
          </label>
          <input
            type="text"
            name="customService"
            value={formData.customService}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
          />
          {errors.customService && (
            <p className="text-red-500 text-xs mt-1">{errors.customService}</p>
          )}
        </div>
      )}

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder={
            formData.service === "custom-solutions"
              ? "Describe your custom certification need..."
              : "Tell us about your certification need..."
          }
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue cursor-pointer text-white py-2 rounded hover:bg-[#1B4079] transition-all duration-300 ease-in-out text-sm"
      >
        Send Message
      </button>

      {/* Status Message */}
      {status && (
        <p className="text-center text-xs mt-2 text-green-600">{status}</p>
      )}
    </form>
  );
};

export default Form;

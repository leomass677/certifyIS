import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  //Validation
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
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");

    // Data sent to your main Outlook inbox
    const contactParams = {
      title: formData.service,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      organization: formData.organization,
      service: formData.service,
      message: formData.message,
    };

    // Data for auto-reply template
    const autoReplyParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      organization: formData.organization,
      service: formData.service,
      message: formData.message,
    };

    // 📨 Send to CertifyIS Outlook inbox
    emailjs
      .send(
        "service_obzk3ho", // your service ID
        "template_811ohh7", // main inbox template
        contactParams,
        "jyOHndjEQHp-L_wMn" // your public key
      )
      .then(() => {
        // ✉️ Send auto-reply
        return emailjs.send(
          "service_obzk3ho", // same service ID
          "template_fgkqce1", // auto-reply template
          autoReplyParams,
          "jyOHndjEQHp-L_wMn"
        );
      })
      .then(() => {
        setStatus("Message sent successfully! Auto-reply delivered.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          service: "",
          message: "",
        });
        setErrors({});
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("Message sent, but auto-reply failed.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-4 lg:p-6 bg-white rounded-md shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-blue">
        Let’s Connect
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
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#122B51]"
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
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#122B51]"
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
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#122B51]"
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
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#122B51]"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-xs font-medium text-gray-600">
          Service Interest
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1  focus:ring-[#122B51]"
        >
          <option value="">Select a Service</option>
          <option value="Indigenous Certificates">
            Indigenous Certificates
          </option>
          <option value="Birth Certificates">Birth Certificates</option>
          <option value="University Certificates">
            University Certificates
          </option>
          <option value="Professional Licenses">Professional Licenses</option>
          <option value="Government Documents">Government Documents</option>
          <option value="Custom Solutions">Custom Solutions</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1">{errors.service}</p>
        )}
      </div>

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
          placeholder="Tell us about your certification need..."
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#122B51]"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "Sending..."}
        className={`w-full py-2 rounded text-white text-sm transition-all duration-500 ${
          status === "Sending..."
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue hover:bg-[#1B4079] active:bg-[#122B51]"
        }`}
      >
        {status === "Sending..." ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-center text-xs mt-2 ${
            status.startsWith("✅")
              ? "text-green-600"
              : status.startsWith("❌")
              ? "text-red-500"
              : "text-gray-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;

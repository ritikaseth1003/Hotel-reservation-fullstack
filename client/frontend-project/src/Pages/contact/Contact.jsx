import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "General Inquiry"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // You can handle form submission logic here
  };

  return (
    <div>
            <Navbar />
      {/* Render the top part of the Header only */}
      <Header type="List" />
      <div className="contactContainer">
        <h1 className="contactTitle">Get in Touch</h1>
        <p className="contactDescription">
          We'd love to hear from you! Reach out with any questions, feedback, or suggestions.
        </p>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contactInput"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contactInput"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="contactInput"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="inquiryType"
              className="contactSelect"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Partnership">Partnership</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              className="contactTextarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="contactButton">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

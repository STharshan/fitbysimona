// src/components/ContactSection.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Sparkles, Mail } from "lucide-react";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Debug environment variables


  // EMAILJS FORM SUBMISSION
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatusMessage("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      setStatusMessage("Failed to send. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#3b2921] text-[#ffffff] px-0 md:px-16 scroll-m-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-light mb-8">Get In Touch</h2>
            <div className="space-y-6 mb-8">

              <a
                href="https://maps.app.goo.gl/pzvez8iAvkge4Uxw6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:text-[#f5c77c]"
              >
                <MapPin className="h-6 w-6 text-[#f5c77c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-[#e8e1da] leading-relaxed">
                    6 The Square, Keyworth, Nottingham NG12 5JT, United Kingdom
                  </p>
                </div>
              </a>

              <a href="tel:01159374180" className="flex items-start space-x-4 hover:text-[#f5c77c]">
                <Phone className="h-6 w-6 text-[#f5c77c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-[#e8e1da]">0115 937 4180</p>
                </div>
              </a>

              <a href="mailto:harrietburns1989@gmail.com" className="flex items-start space-x-4 hover:text-[#f5c77c]">
                <Mail className="h-6 w-6 text-[#f5c77c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-[#e8e1da]">harrietburns1989@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <Sparkles className="h-6 w-6 text-[#f5c77c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Experience</h3>
                  <p className="text-[#e8e1da] leading-relaxed">
                    Relax to classical music while receiving expert hair care in
                    our tranquil environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#9d9287] text-[#ffffff] p-6 rounded-xl shadow-lg" data-aos="zoom-in">
              <h3 className="text-xl font-semibold mb-2">Quick Booking</h3>
              <p className="mb-4">Call us directly for immediate assistance</p>
              <a
                href="tel:01159374180"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 w-full bg-[#ffffff] text-[#1e1c1a] hover:bg-[#e8e1da] transition shadow-md"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0115 937 4180
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — EMAILJS FORM */}
          <div className="bg-[#ffffff]/10 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-left">
            <h3 className="text-2xl font-light mb-6">Send Us a Message</h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Your first name"
                    className="w-full px-4 py-3 bg-[#ffffff]/20 border border-[#ffffff]/30 rounded-lg text-[#ffffff]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Your last name"
                    className="w-full px-4 py-3 bg-[#ffffff]/20 border border-[#ffffff]/30 rounded-lg text-[#ffffff]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#ffffff]/20 border border-[#ffffff]/30 rounded-lg text-[#ffffff]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 bg-[#ffffff]/20 border border-[#ffffff]/30 rounded-lg text-[#ffffff]"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-sm font-medium mb-2">Service Interest</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 bg-[#ffffff]/20 border border-[#ffffff]/30 rounded-lg text-[#ffffff]"
                >
                  <option value="" className="text-[#1e1c1a]">Select a service</option>
                  <option value="cut-finish" className="text-[#1e1c1a]">Cut & Finish</option>
                  <option value="wash-cut" className="text-[#1e1c1a]">Wash & Cut</option>
                  <option value="blowdry-finish" className="text-[#1e1c1a]">Blowdry & Finish</option>
                  <option value="root-tint" className="text-[#1e1c1a]">Root Tint</option>
                  <option value="half-mech" className="text-[#1e1c1a]">Half Mech</option>
                  <option value="full-mech" className="text-[#1e1c1a]">Full Mech</option>
                  <option value="demi-semi" className="text-[#1e1c1a]">Demi/Semi</option>
                  <option value="consultation" className="text-[#1e1c1a]">Free Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your hair goals..."
                  className="w-full px-4 py-3 bg-[#ffffff]/20 border border-[#ffffff]/30 rounded-lg text-[#ffffff] resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-[#ffffff] font-semibold py-3 rounded-lg shadow-md ${
                  isLoading ? "bg-[#867f76] cursor-not-allowed" : "bg-[#9d9287] hover:bg-[#867f76]"
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p className="text-sm text-center mt-2 text-[#ffffff]">{statusMessage}</p>
              )}

              <p className="text-xs text-center text-[#ffffff] mt-4">
                By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

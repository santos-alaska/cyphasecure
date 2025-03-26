import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import contact_us_background_1 from "../assets/contact_us_background_1.png";

const ContactSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // start the spinner

    emailjs
    
      .sendForm(
        "service_qci9nyi",
        "template_1js7gpb",
        formRef.current,
        "eZXCCf5OumS0-1wLV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Sent successfully");
          formRef.current.reset();
          setIsSending(false); // stop the spinner
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send");
          setIsSending(false); // stop the spinner
        }
      );
  };

  return (
    <>
      <section
        className="mb-[50px] md:mb-0 md:py-[100px]"
        style={{
          backgroundImage: `url(${contact_us_background_1})`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Left Column: Info */}
            <div className="md:w-[35%] text-gray-800 relative">
              <div className="p-4 md:p-8 space-y-4 md:space-y-6 h-full">
                <p className="uppercase text-sm text-red-600 tracking-wide font-semibold">
                  Contact Us
                </p>
                <h2 className="text-xl md:text-4xl font-bold">
                  Get in Touch With Us
                </h2>
                <p className="leading-relaxed">
                  Have questions or need assistance? We're here to help! Reach out
                  to us for any inquiries, support, or collaboration opportunities.
                  Our team is ready to assist you with prompt and professional
                  service.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaEnvelope />
                    <span>Cyphanetglobalconcept@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>Alberta, Canada</span>
                  </div>
                </div>
                <div>
                  <p className="uppercase text-sm text-gray-600 tracking-wide mb-2">
                    Our Social Media
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-300">
                      <Link to="https://web.facebook.com/people/Cyphasecure/61566137253684/?mibextid=LQQJ4d">
                        <FaFacebookF />
                      </Link>
                    </span>
                    <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-300">
                      <Link to="https://x.com/CyphanetInc">
                        <FaXTwitter />
                      </Link>
                    </span>
                    <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-300">
                      <Link to="https://www.instagram.com/cybercypha/">
                        <FaInstagramSquare />
                      </Link>
                    </span>
                    <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-300">
                      <Link to="https://www.linkedin.com/company/70548370/admin/dashboard/">
                        <FaLinkedinIn />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-1 bg-white rounded-3xl shadow-md p-6 md:p-8 md:py-12">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-[40px]">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="w-full md:w-1/2 px-3 py-2 text-gray-700 border bg-gray-100 rounded focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="user_phone"
                    placeholder="Phone"
                    className="w-full md:w-1/2 px-3 py-2 text-gray-700 border bg-gray-100 rounded focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full md:w-1/2 px-3 py-2 text-gray-700 border bg-gray-100 rounded focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full md:w-1/2 px-3 py-2 text-gray-700 border bg-gray-100 rounded focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    className="w-full px-3 py-2 text-gray-700 border bg-gray-100 rounded focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-[#121534] transition-colors flex items-center justify-center"
                >
                  {isSending && (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  )}
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ContactSection;

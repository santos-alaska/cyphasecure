import React from "react";
import { FaRocket, FaFistRaised, FaTrophy } from "react-icons/fa";

import data_background from "../assets/data_background.png";
import about_us from "../assets/about_us.png";

const infoCards = [
  {
    title: "Vision",
    description:
      "Our vision is empowering seamless innovation and growth across global platforms.",
    icon: <FaRocket />,
  },
  {
    title: "Mission",
    description:
      "Cyphanet safeguards the digital frontier with proactive cybersecurity solutions to protect data.",
    icon: <FaFistRaised />,
  },
  {
    title: "Value",
    description:
      "We uphold ethics, innovate cybersecurity, ensure quality, and prioritize client security with tailored solutions.",
    icon: <FaTrophy />,
  },
];

const AboutPageOurValues = () => {
  return (
    <div className="pt-10 md:py-20 bg-[#000219]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[100px] max-w-[90%] md:max-w-[85%] mx-auto">
        {/* Text Section */}
        <div className="w-full md:w-[40%] text-white">
          <h1 className="text-red-500 font-semibold uppercase">our values</h1>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight capitalize mt-1 md:mt-4">
            Core Principles that drive our success
          </p>
          <p className="mt-10 text-gray-300">
            We are committed to integrity, innovation, and excellence. Our core
            principles guide every decision we make, ensuring that we deliver
            value, security, and reliability to our clients.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[45%]">
          <img
            src={about_us}
            alt="about_us_img"
            className="rounded-[20px] w-full object-cover"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="py-8">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center p-6 border border-gray-700 shadow-md rounded-lg text-center text-gray-300 bg-[#0a0c24]"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-red-500">
                {card.title}
              </h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPageOurValues;

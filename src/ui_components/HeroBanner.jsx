import React from 'react';
import { TfiSettings } from "react-icons/tfi";
import { ShieldCheck } from 'lucide-react';
import { GiCyberEye } from "react-icons/gi";

const services = [
  {
    id: 1,
    Icon: TfiSettings,
    strokeWidth: 0.07,
    title: 'Pen Testing',
    description:
      'Find and fix hidden vulnerabilities. We simulate real-world attacks to keep your data and systems safe.',
  },
  {
    id: 2,
    Icon: ShieldCheck,
    title: 'Cyber Threat Hunting',
    description:
      'Proactively detect and disrupt emerging threats. Our experts use advanced analytics to protect your environment.',
  },
  {
    id: 3,
    Icon: GiCyberEye,
    title: 'Security Center',
    description:
      'Centralize security operations in one place. Get real-time insights, rapid response, and peace of mind.',
  },
];

const HeroBanner = () => {
  return (
    <div className="mt-[30px] md:-mt-[100px] relative">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[90%] mx-auto gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="
              group
              bg-white 
              text-gray-600
              p-[30px]
              md:shadow-md
              h-[200px]
              transition-all 
              duration-300 
              hover:-translate-y-2 
              hover:bg-red-500 
              hover:text-white
              border md:border-none
            "
          >
            <div className="flex gap-3 items-center mb-4">
              <span className="flip-once">
                <service.Icon
                  size={50}
                  strokeWidth={service.strokeWidth}
                  className="text-red-500 group-hover:text-white transition-colors duration-300"
                />
              </span>
              <h1 className="text-[20px] font-bold">{service.title}</h1>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;

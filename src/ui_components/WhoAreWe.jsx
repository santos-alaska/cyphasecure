import why_us_layout_img_1 from '../assets/why_us_layout_img_1.jpg';
import who_are_we_2 from '../assets/who_are_we_2.jpg';
import who_are_we_3 from '../assets/who_are_we_3.png';

import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from 'react-icons/fa';
import { accordionData } from '../constants/constants';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white pt-[100px] pb-[40px] md:mb-0">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row md:gap-[60px] gap-[50px]">
        {/* Left-Side Images */}
        <div>
          <div className="flex items-end gap-6">
            <motion.img
              src={why_us_layout_img_1}
              alt=""
              className="w-[200px] h-[170px] md:w-[370px] md:h-[270px] rounded-xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.img
              src={who_are_we_2}
              alt=""
              className="w-[100px] h-[100px] md:w-[150px] md:h-[130px] rounded-xl"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-end">
            <motion.img
              src={who_are_we_3}
              alt=""
              className="w-[290px] h-[150px] md:w-[450px] md:h-[200px] rounded-xl mt-6"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Right-Side Text & Accordion */}
        <div className="flex-1 text-justify md:text-left">
          <h1 className="uppercase font-bold text-red-600 mb-2 text-center md:text-start">Who Are We</h1>
          <p>
            <span className="font-semibold">Cyphanet</span> is a cybersecurity company committed to securing the digital world. As a cutting-edge cybersecurity company, we provide robust solutions to protect businesses and individuals from cyber threats.
          </p>
          <p className="mt-4">
            Our expertise spans threat detection, data protection, and proactive security strategies, ensuring your digital assets remain safe. Trust <span className="font-semibold">Cyphanet</span> to fortify your security and stay ahead of cyber risks.
          </p>

          {/* Accordion */}
          <div className="mt-6">
            {accordionData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
              >
                {/* Accordion Header / Toggle */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center py-1 md:py-2 focus:outline-none cursor-pointer"
                >
                  <span
                    className={`
                      inline-flex items-center justify-center mr-1
                      w-4 h-4
                      origin-center
                      transition-transform duration-700
                      ${openIndex === index ? 'rotate-90' : 'rotate-0'}
                    `}
                  >
                    <IoIosArrowForward className="text-black" />
                  </span>
                  <span className="font-semibold">{item.title}</span>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-700
                    ${openIndex === index ? 'max-h-[400px]' : 'max-h-0'}
                  `}
                >
                  <div className="px-2 pb-4 text-gray-700 text-[15px]">
                    {Array.isArray(item.content) ? (
                      <ul className="list-none pl-0">
                        {item.content.map((point, i) => (
                          <li key={i} className="flex items-start mb-2">
                            <FaCheck className="text-green-600 mr-2 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;












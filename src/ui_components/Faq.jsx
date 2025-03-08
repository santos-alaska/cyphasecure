// import React, { useState } from 'react';

// const faqData = [
//     {
//       question: "What is Cyphanet?",
//       answer:
//         "Cyphanet is a leading cybersecurity firm dedicated to protecting your digital assets with innovative security solutions.",
//     },
//     {
//       question: "How does Cyphanet ensure my data is secure?",
//       answer:
//         "We employ state-of-the-art encryption, real-time monitoring, and proactive threat detection to safeguard your information from potential cyber threats.",
//     },
//     {
//       question: "What services does Cyphanet offer?",
//       answer:
//         "Our services include network security, threat assessment, data encryption, and incident response, among other cutting-edge cybersecurity solutions.",
//     },
//     {
//       question: "How can I get support from Cyphanet?",
//       answer:
//         "You can contact our support team via our website's contact form or call our dedicated support hotline for prompt assistance.",
//     },
//   ];

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className='bg-[#000219] text-white mt-[80px]'>
//       <div className="max-w-4xl mx-auto p-8">
//         <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqData.map((faq, index) => (
//             <div key={index} className="border rounded-lg p-4 shadow-sm transition-all duration-300 ease-in-out hover:border-gray-400">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full text-left flex justify-between items-center focus:outline-none"
//               >
//                 <span className="text-xl font-medium">{faq.question}</span>
//                 <span className={`text-2xl transition-transform duration-300 ${
//                   activeIndex === index ? 'rotate-180' : ''
//                 }`}>
//                   {activeIndex === index ? '−' : '+'}
//                 </span>
//               </button>
//               <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                 activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//               }`}>
//                 <p className="mt-4 text-gray-300">{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;


import React, { useState } from 'react';
import { motion } from 'framer-motion';  // <-- Import from Framer Motion
import faq from '../assets/faq.png';

const faqData = [
  {
    question: "What does Cyphanet Do?",
    answer:
      "Cyphanet is a leading cybersecurity firm dedicated to protecting your digital assets with innovative security solutions.",
  },
  {
    question: "How does Cyphanet ensure my data is secure?",
    answer:
      "We employ state-of-the-art encryption, real-time monitoring, and proactive threat detection to safeguard your information from potential cyber threats.",
  },
  {
    question: "What services does Cyphanet offer?",
    answer:
      "Our services include network security, threat assessment, data encryption, and incident response, among other cutting-edge cybersecurity solutions.",
  },
  {
    question: "How can I get support from Cyphanet?",
    answer:
      "You can contact our support team via our website's contact form or call our dedicated support hotline for prompt assistance.",
  },
  {
    question: "How can I get support from Cyphanet?",
    answer:
      "You can contact our support team via our website's contact form or call our dedicated support hotline for prompt assistance.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#000219]">
      <div className="max-w-[90%] mx-auto py-[60px] md:py-[100px] md:mt-[80px] flex flex-col gap-[60px] md:flex-row-reverse">

        {/* FAQ Section */}
        <div className="max-w-full md:max-w-[55%] text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="
                  border rounded-lg p-4 shadow-sm
                  transition-all duration-300 ease-in-out
                  hover:border-gray-400 hover:shadow-md hover:scale-[1.02]
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="md:text-xl font-medium">{faq.question}</span>
                  <span
                    className={`
                      text-2xl transition-transform duration-300
                      ${activeIndex === index ? 'rotate-180' : ''}
                    `}
                  >
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>

                {/* Slide/Fade effect on the answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out transform
                    ${
                      activeIndex === index
                        ? 'max-h-[500px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-2'
                    }
                  `}
                >
                  <p className="mt-4 text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section with Framer Motion */}
        <motion.div
          // Start the image off-screen to the left with 0 opacity
          initial={{ x: -100, opacity: 0 }}
          // Animate to fully visible and in place when in view
          whileInView={{ x: 0, opacity: 1 }}
          // Control the duration and easing
          transition={{ duration: 0.8, ease: 'easeOut' }}
          // Ensures the animation only plays once when it enters the viewport
          viewport={{ once: true }}
        >
          <img src={faq} alt="FAQ" />
        </motion.div>

      </div>
    </div>
  );
};

export default Faq;

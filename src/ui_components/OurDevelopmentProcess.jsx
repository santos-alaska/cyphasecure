// import React from 'react'
// import strategy_img_1 from '../assets/strategy_img_1.png'
// import strategy_img_2 from '../assets/strategy_img_2.png'
// import strategy_img_3 from '../assets/strategy_img_3.png'
// import strategy_img_4 from '../assets/strategy_img_4.png'

// const stages = [
//     {
//         number: '01',
//         name: 'Assess',
//         numberClass: ' text-orange-400',
//         bgClass: 'bg-orange-200',
//         dotClass: 'bg-orange-400',
//         illustration: strategy_img_1,
//     },
//     {
//         number: '02',
//         name: 'Plan',
//         numberClass: 'border-blue-400 text-blue-400',
//         bgClass: 'bg-blue-200',
//         dotClass: 'bg-blue-400',
//         illustration: strategy_img_2
//     },
//     {
//         number: '03',
//         name: 'Implement',
//         numberClass: 'border-blue-500 text-blue-500',
//         bgClass: 'bg-blue-300',
//         dotClass: 'bg-blue-500',
//         illustration: strategy_img_3
//     },
//     {
//         number: '04',
//         name: 'Monitor',
//         numberClass: 'border-green-400 text-green-400',
//         bgClass: 'bg-green-200',
//         dotClass: 'bg-green-400',
//         illustration: strategy_img_4
//     },
// ];

// const OurDevelopmentProcess = () => {
//     return (
//         <div>
//             {/* Development Process Section */}
//             <div className=" max-w-[85%] mx-auto pb-[90px]">
//                 <h2 className="text-3xl font-bold text-gray-800 text-center mb-[90px]">
//                     Our Cybersecurity Strategy
//                 </h2>
//                 <div className="flex justify-around items-center">
//                     {stages.map((stage, index) => (
//                         <React.Fragment key={index}>
//                             {/* Arrow between stages */}
//                             {index > 0 && (
//                                 <div className="flex items-center">
//                                     <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
//                                     <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
//                                     <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
//                                 </div>
//                             )}
//                             {/* Stage Item */}
//                             <div className="relative flex flex-col items-center">
//                                 <div className='p-8 border-[1px] border-dashed rounded-full border-red-600'>

//                                     <div
//                                         className={`absolute -top-4 left-4 w-12 h-12 bg-white shadow-xl text-lg font-bold  ${stage.numberClass} rounded-full flex items-center justify-center`}
//                                     >
//                                         {stage.number}
//                                     </div>
//                                     <div
//                                         className={`w-24 h-24 ${stage.bgClass} rounded-full flex items-center justify-center text-4xl`}
//                                     >
//                                         <img src={stage.illustration} alt="stage illustrations" />
//                                     </div>

//                                     <div
//                                         className={`absolute bottom-[85px] right-0 w-8 h-8 ${stage.dotClass} rounded-full`}
//                                     >

//                                     </div>
//                                 </div>
//                                 <p className="mt-8 font-bold text-[23px] text-gray-800">{stage.name}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </div></div>
//     )
// }

// export default OurDevelopmentProcess



import React from 'react';
import strategy_img_1 from '../assets/strategy_img_1.png';
import strategy_img_2 from '../assets/strategy_img_2.png';
import strategy_img_3 from '../assets/strategy_img_3.png';
import strategy_img_4 from '../assets/strategy_img_4.png';

const stages = [
  {
    number: '01',
    name: 'Assess',
    numberClass: 'text-orange-400',
    bgClass: 'bg-orange-200',
    dotClass: 'bg-orange-400',
    illustration: strategy_img_1,
  },
  {
    number: '02',
    name: 'Plan',
    numberClass: 'text-blue-400',
    bgClass: 'bg-blue-200',
    dotClass: 'bg-blue-400',
    illustration: strategy_img_2,
  },
  {
    number: '03',
    name: 'Implement',
    numberClass: 'text-blue-500',
    bgClass: 'bg-blue-300',
    dotClass: 'bg-blue-500',
    illustration: strategy_img_3,
  },
  {
    number: '04',
    name: 'Monitor',
    numberClass: 'text-green-400',
    bgClass: 'bg-green-200',
    dotClass: 'bg-green-400',
    illustration: strategy_img_4,
  },
];

const OurDevelopmentProcess = () => {
  return (
    <div className="max-w-[85%] mx-auto pb-10 md:pb-[90px]">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10 md:mb-[90px]">
        Our Cybersecurity Strategy
      </h2>

      {/* Container for stages, wraps on small screens */}
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-8">
        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            {/* Dots between items (only show on md+ screens) */}
            {index > 0 && (
              <div className="hidden md:flex items-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
              </div>
            )}

            {/* Stage Item */}
            <div className="relative flex flex-col items-center text-center">
              <div className="p-6 md:p-8 border border-dashed border-red-600 rounded-full">
                {/* Stage Number */}
                <div
                  className={`absolute -top-2 md:-top-5 left-[20%] md:left-[30%] -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-white shadow-xl font-bold ${stage.numberClass} rounded-full flex items-center justify-center`}
                >
                  {stage.number}
                </div>

                {/* Illustration Circle */}
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 ${stage.bgClass} rounded-full flex items-center justify-center`}
                >
                  <img
                    src={stage.illustration}
                    alt="stage illustrations"
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                </div>

                {/* Dot decoration (bottom-right) */}
                <div
                  className={`absolute md:bottom-[76px] bottom-[68px] right-0 w-6 h-6 md:w-8 md:h-8 ${stage.dotClass} rounded-full`}
                ></div>
              </div>

              <p className="mt-6 md:mt-8 font-bold text-lg md:text-xl text-gray-800">
                {stage.name}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OurDevelopmentProcess;

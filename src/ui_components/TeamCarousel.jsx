import React, { useState, useEffect } from 'react';
import front_end from '../assets/front_end.png'
import ceo from '../assets/ceo.png'
import digital_marketer from '../assets/digital_marketer.jpg'
import technical_manager from '../assets/technical_manager.png'

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const team = [
    {
      id: 1,
      name: 'Akeredolu Kolawole',
      role: 'Chief Executive Officer ',
      image: ceo
    },
    {
      id: 2,
      name: 'Webe Blessing',
      role: 'Frontend Engineer',
      image: front_end
    },
    {
      id: 3,
      name: 'Ayodele Precious',
      role: 'Digital Marketer',
      image: digital_marketer
    },
    {
      id: 4,
      name: 'Akeredolu Tosin',
      role: 'Technical Project Manager',
      image: technical_manager
    },

  ];

  // Move to the next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (team.length - 2));
  };

  // Move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + (team.length - 2)) % (team.length - 2));
  };

  // Automatically switch to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hidden md:block'>
      <div className="max-w-7xl mx-auto px-4 py-[80px] relative ">
        <h1 className='text-[40px] font-semibold text-center py-[40px]'><span className='text-red-500'>Meet Our</span> Expert Team Members</h1>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
          >
            {team.map((member) => (
              <div key={member.id} className="min-w-[33.333%] p-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[250px] h-[250px] rounded-full ml-[70px]"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FaArrowLeft className="text-gray-700 text-xl" />
          </button> */}

          {/* Next Button */}
          {/* <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FaArrowRight className="text-gray-700 text-xl" />
          </button> */}
        </div>

        {/* Dots for manual navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: team.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[5px] h-[5px] rounded-full transition-colors ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;


// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import front_end from '../assets/front_end.png';
// import ceo from '../assets/ceo.png';
// import digital_marketer from '../assets/digital_marketer.jpg';
// import technical_manager from '../assets/technical_manager.png';

// const TeamCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const team = [
//     { id: 1, name: 'Akeredolu Kolawole', role: 'Chief Executive Officer', image: ceo },
//     { id: 2, name: 'Webe Blessing', role: 'Frontend Engineer', image: front_end },
//     { id: 3, name: 'Ayodele Precious', role: 'Digital Marketer', image: digital_marketer },
//     { id: 4, name: 'Akeredolu Tosin', role: 'Technical Project Manager', image: technical_manager },
//   ];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const nextSlide = () => setActiveIndex(prev => (prev + 1) % team.length);
//   const prevSlide = () => setActiveIndex(prev => (prev - 1 + team.length) % team.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="overflow-hidden py-12 md:py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-16">
//           Meet Our Amazing Team Members
//         </h1>

//         {/* Mobile View */}
//         <div className="md:hidden overflow-hidden w-full">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {team.map((member) => (
//               <div key={member.id} className="min-w-full p-2">
//                 <div className="bg-white rounded-xl shadow-lg border p-4 mx-2">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-48 h-48 rounded-full mx-auto object-cover"
//                   />
//                   <div className="p-4 text-center">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
//                     <p className="text-gray-600">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop View */}
//         <div className="hidden md:block overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
//           >
//             {[...team, ...team.slice(0, 2)].map((member, index) => (
//               <div key={`${member.id}-${index}`} className="w-1/3 flex-shrink-0 p-4">
//                 <div className="bg-white rounded-xl shadow-lg border p-6">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-64 h-64 rounded-full mx-auto object-cover"
//                   />
//                   <div className="p-4 text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
//                     <p className="text-gray-600">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         {/* <button
//           onClick={prevSlide}
//           className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
//         >
//           <FaArrowLeft className="text-gray-700" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
//         >
//           <FaArrowRight className="text-gray-700" />
//         </button> */}

//         {/* Pagination Dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {team.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex % team.length ? 'bg-gray-800' : 'bg-gray-300'
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCarousel;






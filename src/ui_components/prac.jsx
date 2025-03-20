// import React, { useState, useEffect } from 'react';
// import sales_trend from '../assets/sales_trend.png';

// const Prac = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % 5); // Cycle through 0-4 (5 items)
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (activeIndex === 4) {
//       setTimeout(() => {
//         setTransitionEnabled(false);
//         setActiveIndex(0);
//         setTimeout(() => setTransitionEnabled(true), 10);
//       }, 500);
//     }
//   }, [activeIndex]);

//   return (
//     <div className="overflow-hidden w-full relative">
//       <div 
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{
//           transform: `translateX(-${activeIndex * 20}%)`,
//           transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
//         }}
//       >
//         {[0, 1, 2, 3, 0].map((_, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img 
//               src={sales_trend} 
//               alt="Sales trends" 
//               className="w-full h-[400px] object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Prac;
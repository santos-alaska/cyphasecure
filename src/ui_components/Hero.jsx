// import React from 'react';
// import { motion } from "framer-motion";

// import business_background from '../assets/business_background.png';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//     return (
//         <div className="relative ">


//             {/* Hero/Background Section */}
//             <div
//                 className="relative h-[76vh] md:h-[135vh] bg-cover bg-center bg-no-repeat"
//                 style={{ backgroundImage: `url(${business_background})` }}
//             >
//                 {/* Dark overlay that doesn't affect the navbar */}
//                 <div className="absolute inset-0 bg-black bg-opacity-70" />

//                 {/* Content inside the background - Animated with Framer Motion */}
//                 <div className="relative z-10 max-w-[90%] mx-auto pt-[150px] md:pt-[200px] text-white">
//                     <motion.div
//                         initial={{ x: "-100%", opacity: 0 }} // Starts off-screen to the left
//                         animate={{ x: 0, opacity: 1 }} // Animates to normal position
//                         transition={{ duration: 1, ease: "easeOut" }} // Animation settings
//                         className='md:w-[50%]'
//                     >
//                         <p className='text-red-600 font-bold uppercase text-[14px] md:text-base mt-4 md:mt-0'>Welcome to Cyphanet</p>
//                         <h1 className='text-[33px] md:text-[60px] font-bold leading-tight md:leading-normal mb-4 md:mb-0'>Cyber Security Solutions Built On Customer Trust</h1>
//                         <p className='font-medium text-[15px] md:text-base'>We deliver cutting-edge, customized defense solutions. Our experts ensure seamless integration, robust protection, and outstanding performance.</p>
//                         <Link to='/services'>
//                             <button className='bg-red-600 hover:bg-red-700 px-6 py-2 font-bold text-white mt-4'>
//                                 Learn More
//                             </button>
//                         </Link>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;



import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import business_background from '../assets/business_background.png';

const Hero = () => {
  const [isInView, setIsInView] = useState(false);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const heroRef = useRef(null);

  // Use Intersection Observer to detect when Hero is in view
  useEffect(() => {
    let observer;
    if (heroRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observerInstance.unobserve(heroRef.current);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(heroRef.current);
    } else {
      setIsInView(true);
    }
    
    return () => {
      if (observer && heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Preload the background image when the component is in view
  useEffect(() => {
    if (isInView) {
      const img = new Image();
      img.src = business_background;
      img.onload = () => {
        setBgImageLoaded(true);
      };
      // Optionally handle error with img.onerror
    }
  }, [isInView]);

  return (
    <div className="relative">
      {/* Hero/Background Section */}
      <div
        ref={heroRef}
        className="relative h-[76vh] md:h-[135vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bgImageLoaded ? `url(${business_background})` : 'none' }}
      >
        {/* Spinner overlay while image is loading */}
        {!bgImageLoaded && isInView && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {/* Replace this with your spinner component or CSS spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* Content inside the background - Animated with Framer Motion */}
        <div className="relative z-10 max-w-[90%] mx-auto pt-[150px] md:pt-[200px] text-white">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-[50%]"
          >
            <p className="text-red-600 font-bold uppercase text-[14px] md:text-base mt-4 md:mt-0">
              Welcome to Cyphanet
            </p>
            <h1 className="text-[33px] md:text-[60px] font-bold leading-tight md:leading-normal mb-4 md:mb-0">
              Cyber Security Solutions Built On Customer Trust
            </h1>
            <p className="font-medium text-[15px] md:text-base">
              We deliver cutting-edge, customized defense solutions. Our experts ensure seamless integration, robust protection, and outstanding performance.
            </p>
            <Link to="/services">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 font-bold text-white mt-4">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

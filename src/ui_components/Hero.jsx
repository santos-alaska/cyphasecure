import React from 'react';
import { motion } from "framer-motion";

import business_background from '../assets/business_background.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative ">


            {/* Hero/Background Section */}
            <div
                className="relative h-[76vh] md:h-[135vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${business_background})` }}
            >
                {/* Dark overlay that doesn't affect the navbar */}
                <div className="absolute inset-0 bg-black bg-opacity-70" />

                {/* Content inside the background - Animated with Framer Motion */}
                <div className="relative z-10 max-w-[90%] mx-auto pt-[150px] md:pt-[200px] text-white">
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }} // Starts off-screen to the left
                        animate={{ x: 0, opacity: 1 }} // Animates to normal position
                        transition={{ duration: 1, ease: "easeOut" }} // Animation settings
                        className='md:w-[50%]'
                    >
                        <p className='text-red-600 font-bold uppercase text-[14px] md:text-base mt-4 md:mt-0'>Welcome to Cyphanet</p>
                        <h1 className='text-[33px] md:text-[60px] font-bold leading-tight md:leading-normal mb-4 md:mb-0'>Cyber Security Solutions Built On Customer Trust</h1>
                        <p className='font-medium text-[15px] md:text-base'>We deliver cutting-edge, customized defense solutions. Our experts ensure seamless integration, robust protection, and outstanding performance.</p>
                        <Link to='/services'>
                            <button className='bg-red-600 hover:bg-red-700 px-6 py-2 font-bold text-white mt-4'>
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


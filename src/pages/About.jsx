import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from 'react-icons/fa';
import { accordionData } from '../constants/constants'
import React from 'react'
import AboutPageOurValues from '@/ui_components/AboutPageOurValues';
import TestimonialSection from '@/ui_components/TestimonialSection';
import ServicesSection from '@/ui_components/ServicesSection';
import data_background from '../assets/data_background.png'
import { Link } from 'react-router-dom';


const About = () => {
    const [openIndex, setOpenIndex] = useState(null);



    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <h1 className=" text-[25px] md:text-[40px] font-bold text-center mt-[100px] md:mt-[150px]">About Us</h1>

            <p className="md:text-lg text-center mx-auto max-w-3xl mt-2">
                Empowering Digital Security with Innovative Solutions.
            </p>

            <div className="bg-white pt-[50px] md:pt-[100px] pb-[30px] md:pb-[60px]">
                <div className="max-w-[90%] mx-auto flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
                    <div className="text-center md:text-left">
                        <h1 className="uppercase font-bold text-red-600 mb-2">Who Are We</h1>
                        <p className=''> <span className='font-semibold'>Cyphanet</span> is a cybersecurity company committed to securing the digital world. As a cutting-edge cybersecurity company, we provide robust solutions to protect businesses and individuals from cyber threats.</p>
                        <p className=' mt-4'>Our expertise spans threat detection, data protection, and proactive security strategies, ensuring your digital assets remain safe. Trust <span className='font-semibold'>Cyphanet</span> to fortify your security and stay ahead of cyber risks.</p>



                        <div className="bg-white rounded-md border border-dashed border-gray-400 mt-5 p-4 
  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                        >
                            {/* Left: Avatars + Text */}
                            <div className="flex items-center space-x-4">
                                {/* Overlapping Avatars */}
                                <div className="flex -space-x-3">
                                    <img
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                        src="https://randomuser.me/api/portraits/men/46.jpg"
                                        alt="Client 1"
                                    />
                                    <img
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                        src="https://randomuser.me/api/portraits/women/47.jpg"
                                        alt="Client 2"
                                    />
                                    <img
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                        src="https://randomuser.me/api/portraits/men/48.jpg"
                                        alt="Client 3"
                                    />
                                    <img
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                        src="https://randomuser.me/api/portraits/women/49.jpg"
                                        alt="Client 4"
                                    />
                                </div>

                                {/* Text */}
                                <span className=" md:text-lg font-semibold">
                                    <span className="text-red-600"> Over 50+</span> Satisfied Clients
                                </span>
                            </div>

                            {/* Right: Button */}
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
                                <Link to="/contact">
                                    Let’s Talk
                                </Link>
                            </button>
                        </div>

                    </div>
                    <div>
                        <img src={data_background} alt="about_us" className='w-full rounded-3xl h-[90%]' />
                    </div>

                </div>
            </div>
            <AboutPageOurValues />
            <TestimonialSection />

        </div>
    )
}

export default About
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import front_end from '../assets/front_end.png';
import ceo from '../assets/ceo.png';
import technical_manager from '../assets/technical_manager.png';
import digital from '../assets/digital.jpg'

const TeamCarouselMobile = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const team = [
        { id: 1, name: 'Akeredolu Kolawole', role: 'Chief Executive Officer', image: ceo },
        { id: 2, name: 'Webe Blessing', role: 'Frontend Engineer', image: front_end },
        { id: 3, name: 'Ayodele Precious', role: 'Digital Marketer', image: digital },
        { id: 4, name: 'Akeredolu Tosin', role: 'Technical Project Manager', image: technical_manager },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => setActiveIndex(prev => (prev + 1) % team.length);
    const prevSlide = () => setActiveIndex(prev => (prev - 1 + team.length) % team.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden py-12 md:py-20 block md:hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-2xl  font-semibold text-center mb-8 md:mb-16">
                    <span className='text-red-500'>
                        Meet Our </span> Expert Team Members
                </h1>


                {/* Mobile View */}
                <div className=" overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {team.map((member) => (
                            <div key={member.id} className="min-w-full p-2">
                                <div className="bg-white rounded-xl shadow-lg border p-4 mx-2">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-48 h-48 rounded-full mx-auto "
                                    />
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                        <p className="text-gray-600">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {team.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-[5px] h-[5px] rounded-full transition-colors ${index === activeIndex % team.length ? 'bg-gray-800' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamCarouselMobile;






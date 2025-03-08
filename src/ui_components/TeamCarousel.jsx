import React, { useState, useEffect } from 'react';
import front_end from '../assets/front_end.png'
import ceo from '../assets/ceo.png'
import technical_manager from '../assets/technical_manager.png'
import digital from '../assets/digital.jpg'

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
      image: digital
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

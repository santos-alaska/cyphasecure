import React, { useState, useEffect, useRef } from 'react';

// Define the stats array (unchanged)
const stats = [
  { number: '12+', label: 'Years of Operation' },
  { number: '256+', label: 'Projects delivered' },
  { number: '65+', label: 'Team Specialists' },
  { number: '25+', label: 'Around The World' },
];

// Stat Component for individual statistic animation
function Stat({ number, label, isVisible }) {
  const finalNumber = parseInt(number, 10); // Extract numeric part (e.g., '12+' → 12)
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Only animate when visible

    const duration = 2000; // 2 seconds for all animations
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
      setCurrentNumber(Math.floor(progress * finalNumber));
      if (progress < 1) {
        requestAnimationFrame(animate); // Continue until complete
      } else {
        setCurrentNumber(finalNumber); // Ensure exact final value
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, finalNumber]);

  return (
    <div
      className={`mb-10 md:mb-0 relative transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-20'
        }`}
    >
      <span
        className="relative text-[50px] md:text-7xl font-bold leading-none text-transparent"
        style={{ WebkitTextStroke: '1px white' }}
      >
        {currentNumber}
      </span>
      <span
        className="absolute text-3xl md:text-4xl font-bold leading-none text-transparent"
        style={{ WebkitTextStroke: '1px white' }}
      >
        +
      </span>
      <div className='hidden md:block'>
        <div className="bg-yellow-300/80 h-[25px] w-[25px] absolute left-[9px] top-8 rounded-full"></div>
      </div>
      <p className="text-white  md:text-[20px] font-semibold mt-4">{label}</p>
    </div>
  );
}

const CompanySection = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div className="bg-white py-[40px] md:py-[80px] max-w-[90%] md:max-w-[85%] mx-auto">
      {/* Company Introduction */}
      <h1 className=" text-[19px] md:text-[40px] font-bold text-center mb-[30px] md:mb-[60px]">
        Cyphanet is a cybersecurity company that provides a wide range of security solutions, including threat analysis, risk assessment, consultancy, and more.
      </h1>

      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="md:h-[230px] bg-blue-700 p-[30px] rounded-[20px] md:pt-[60px]"
      >
        <div className="flex flex-col md:flex-row  md:justify-around items-center ">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              number={stat.number}
              label={stat.label}
              isVisible={isStatsVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanySection;
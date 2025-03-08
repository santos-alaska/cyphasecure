import React from "react";

const ServicesSection = () => {
  return (
    <section className="relative bg-blue-50 py-16">
      {/* Background text */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-6xl md:text-9xl font-extrabold text-gray-200 uppercase">
          Agency
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
          We Offers A Wide Scale Of Creative Services, Including Online Marketing, 
          Consultant Services And Lots More.
        </h2>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-600">12+</span>
            <span className="mt-2 text-lg font-medium text-gray-800">
              Years of operation
            </span>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-600">256+</span>
            <span className="mt-2 text-lg font-medium text-gray-800">
              Projects delivered
            </span>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-600">65+</span>
            <span className="mt-2 text-lg font-medium text-gray-800">
              Team Specialist
            </span>
          </div>
          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-600">25+</span>
            <span className="mt-2 text-lg font-medium text-gray-800">
              Around The World
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import services_img_1 from '../assets/services_img_1.jpg';
import services_img_2 from '../assets/services_img_2.jpg';
import services_img_3 from '../assets/services_img_3.jpg';
import services_img_4 from '../assets/services_img_4.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const servicesData = [
  {
    id: 1,
    title: "Managed detection and response",
    description:
      "Advanced threat monitoring and rapid incident response, ensuring complete network security.",
    image: services_img_1,
  },
  {
    id: 2,
    title: "Security Information and Event Management",
    description:
      "Real-time analysis of security logs to accurately detect and prevent breaches.",
    image: services_img_2,
  },
  {
    id: 3,
    title: "Vulnerability Management",
    description:
      "Proactive identification and rapid remediation of system vulnerabilities ensuring continuous protection.",
    image: services_img_3,
  },
  {
    id: 4,
    title: "Compliance and risk assessment",
    description:
      "Thorough evaluations aligning strict regulatory compliance with proactive risk management strategies.",
    image: services_img_4,
  },
];

const OurServices = () => {
  return (
    <div>
      <div className='bg-gray-50 py-[40px] pb-[50px]  md:py-[40px] md:mt-[95px]'>
        <div className="max-w-[90%] mx-auto md:py-12">
          <div className="md:max-w-[60%] mx-auto mb-6 md:mb-12 text-center">
            <h1 className="text-[25px] md:text-[40px] font-bold mb-2 md:mb-4">Services we offer</h1>
            <p className="text-gray-700 md:tracking-widest text-[16px] md:text-[20px]">
              The services we offer are specifically designed to meet your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative h-[350px] overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Background with gradient overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 md:group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]" />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 text-white flex flex-col justify-end">
                  {/* Always visible title */}
                  <p className="text-lg mb-2 font-semibold transition-transform duration-300 md:translate-y-0 md:group-hover:-translate-y-[100px]">
                    {service.title}
                  </p>


                  <div className="md:absolute left-6 right-6 bottom-6 transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0">
                    <p className="text-sm mb-2">{service.description}</p>
                    {/* <button className="py-1 text-red-700 hover:text-red-900 transition-colors font-bold">
                      Learn more
                      <FaArrowRightLong size={15} className="inline ml-2" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

import approach_img from '../assets/approach_img.jpg';
import { FaCheckCircle, FaHeadset, FaCogs, FaThumbsUp } from "react-icons/fa";

const whyChooseUsData = [
    {
        id: 1,
        icon: <FaCheckCircle className="text-red-600 text-[30px] mb-2 flex" />,
        title: "Expertise & Experience",
        description: "Over 10 years of industry experience with a proven track record.",
    },
    {
        id: 2,
        icon: <FaCogs className="text-red-600 text-[30px] mb-2 flex" />,
        title: "Innovative Solutions",
        description: "We use the latest technology to provide cutting-edge solutions.",
    },
    {
        id: 3,
        icon: <FaHeadset className="text-red-600 text-[30px] mb-2 flex" />,
        title: "24/7 Customer Support",
        description: "Our team is always available to assist you at any time.",
    },
    {
        id: 4,
        icon: <FaThumbsUp className="text-red-600 text-[30px] mb-2 flex" />,
        title: "Trusted by Clients",
        description: "We have helped 500+ satisfied clients worldwide.",
    },
];

const WhyChooseUs = () => {
    return (
        <div className=" pt-[30px] md:pt-[100px]  max-w-[90%] mx-auto">
            <div>
                <h2 className="text-lg md:text-[40px] text-center font-bold md:mb-6">Why Choose Us?</h2>
            </div>
            <div className="mt-[20px] md:mt-[40px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px]">
                <img
                    src={approach_img}
                    alt="approach_img"
                    className="rounded-tr-[70px] rounded-bl-[70px]"
                />
                <div>
                    <p className="text-gray-900 text-md md:text-xl font-semibold">
                    At Cyphanet, we provide top-tier services that meet your needs, ensuring robust security, proactive threat detection, and tailored solutions to safeguard your digital assets.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {whyChooseUsData.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-2 border-l-2 border-red-600 shadow-md text-center transition transform duration-300 hover:-translate-y-2"
                            >
                                <div className="flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;



































// import { FaCheckCircle, FaHeadset, FaCogs, FaThumbsUp } from "react-icons/fa";

// const whyChooseUsData = [
//   {
//     id: 1,
//     icon: <FaCheckCircle className="text-blue-600 text-4xl mb-4" />,
//     title: "Expertise & Experience",
//     description: "Over 10 years of industry experience with a proven track record.",
//   },
//   {
//     id: 2,
//     icon: <FaCogs className="text-blue-600 text-4xl mb-4" />,
//     title: "Innovative Solutions",
//     description: "We use the latest technology to provide cutting-edge solutions.",
//   },
//   {
//     id: 3,
//     icon: <FaHeadset className="text-blue-600 text-4xl mb-4" />,
//     title: "24/7 Customer Support",
//     description: "Our team is always available to assist you at any time.",
//   },
//   {
//     id: 4,
//     icon: <FaThumbsUp className="text-blue-600 text-4xl mb-4" />,
//     title: "Trusted by Clients",
//     description: "We have helped 500+ satisfied clients worldwide.",
//   },
// ];

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     feedback: "Amazing service! Highly professional and great support.",
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     feedback: "They exceeded my expectations! Would definitely recommend.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-[80%] mx-auto text-center">
{/* <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
<p className="text-gray-600 max-w-[60%] mx-auto">
  We stand out from the competition by providing top-tier services that meet your needs.
</p> */}
//       </div>

//       {/* Benefits Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[80%] mx-auto mt-12">
//         {whyChooseUsData.map((item) => (
//           <div key={item.id} className="bg-white p-6 rounded-lg shadow-md text-center">
//             {item.icon}
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-gray-600">{item.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Testimonials Section */}
//       <div className="max-w-[60%] mx-auto mt-16 text-center">
//         <h3 className="text-2xl font-semibold mb-6">What Our Clients Say</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
//               <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
//               <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="text-center mt-12">
//         <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition">
//           Get Started Today
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

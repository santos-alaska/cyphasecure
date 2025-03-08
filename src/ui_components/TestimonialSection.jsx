import testimonia_img_1 from '../assets/testimonial_img_1.jpg'
import testimonia_img_2 from '../assets/testimonial_img_2.jpg'
import testimonia_img_3 from '../assets/testimonial_img_3.jpg'
import { FaStar } from 'react-icons/fa';

// Example testimonial data
const testimonials = [
  {
    name: 'Laura Wilson',
    role: 'Cyber Security Analyst',
    text: "We have been very impressed with Cyphanet's ability to tailor their solutions to our specific needs. Their support has been outstanding.",
    rating: 5,
    image: testimonia_img_1,
  },
  {
    name: 'John Smith',
    role: 'IT Manager',
    text: "Cyphanet's cyber security services have given us peace of mind. We can now focus on our business without worrying about data breaches.",
    rating: 4,
    image: testimonia_img_2,
  },
  {
    name: 'David John',
    role: 'System Administration',
    text: 'Thanks to Cyphanet, our company cyber attacks has significantly reduced. Thier proactive approach to IT security is unmatched.',
    rating: 5,
    image: testimonia_img_3,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-[60px] md:py-[90px] md:pb-[100px] px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Don’t just take our word for it—see what our clients have to say about 
          their experiences with Cyphanet’s cybersecurity solutions.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Client Info */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Rating */}
              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

// import { useState, useEffect } from 'react';

// const testimonials = [
//   {
//     name: 'Sarah Johnson',
//     role: 'CEO, Tech Solutions',
//     text: 'Absolutely amazing experience! The service was top-notch and the results exceeded my expectations. Highly recommended!',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Marketing Director',
//     text: 'Working with this team has been a game-changer for our business. Their professionalism and expertise are unmatched.',
//     image: 'https://randomuser.me/api/portraits/men/75.jpg',
//   },
//   {
//     name: 'Emma Williams',
//     role: 'Founder, Creative Co.',
//     text: 'Exceptional quality and attention to detail. They delivered exactly what we needed in record time. Will definitely work with them again!',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//   },
// ];

// export default function TestimonialSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => {
//         if (prev >= testimonials.length - 1) {
//           setTransitionEnabled(false);
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (activeIndex === 0 && !transitionEnabled) {
//       const timeout = setTimeout(() => {
//         setTransitionEnabled(true);
//       }, 10);
//       return () => clearTimeout(timeout);
//     }
//   }, [activeIndex, transitionEnabled]);

//   return (
//     <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-4xl font-bold text-gray-900 mb-8">
//           What Our Clients Say
//         </h2>
        
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${activeIndex * 100}%)`,
//               transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none',
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0 px-4"
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
//                   <svg
//                     className="absolute top-8 left-8 text-blue-500 opacity-20 w-12 h-12"
//                     fill="currentColor"
//                     viewBox="0 0 32 32"
//                   >
//                     <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
//                   </svg>
//                   <p className="text-lg text-gray-600 mt-12 mb-8">
//                     {testimonial.text}
//                   </p>
//                   <div className="flex items-center">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full border-4 border-blue-500"
//                     />
//                     <div className="ml-4">
//                       <div className="text-xl font-semibold text-gray-900">
//                         {testimonial.name}
//                       </div>
//                       <div className="text-blue-600">{testimonial.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

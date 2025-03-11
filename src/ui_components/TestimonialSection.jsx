import testimonial_img_1 from '../assets/testimonial_img_1.jpg'
import testimonial_img_2 from '../assets/testimonial_img_2.jpg'
import testimonial_img_3 from '../assets/testimonial_img_3.jpg'
import { FaStar } from 'react-icons/fa';

// Example testimonial data
const testimonials = [
  {
    name: 'Laura Wilson',
    role: 'Cyber Security Analyst',
    text: "We have been very impressed with Cyphanet's ability to tailor their solutions to our specific needs. Their support has been outstanding.",
    rating: 5,
    image: testimonial_img_1,
  },
  {
    name: 'John Smith',
    role: 'IT Manager',
    text: "Cyphanet's cyber security services have given us peace of mind. We can now focus on our business without worrying about data breaches.",
    rating: 4,
    image: testimonial_img_2,
  },
  {
    name: 'David John',
    role: 'System Administration',
    text: 'Thanks to Cyphanet, our company cyber attacks has significantly reduced. Thier proactive approach to IT security is unmatched.',
    rating: 5,
    image: testimonial_img_3,
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

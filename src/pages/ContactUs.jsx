import ContactSection from '@/ui_components/ContactSection';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { SiOpencollective } from "react-icons/si";


const ContactUs = () => {
  return (
    <div className="bg-white py-8 pt-[100px] md:pt-[200px] ">
      <h1 className='text-[25px] md:text-[40px] font-bold text-center mb-9 '>Contact Us</h1>
      <div className="md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        <div className="bg-white border shadow p-6 rounded-lg flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-red-600 text-2xl" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Visit Our Office</h2>
          <p className="text-gray-600">
            Alberta, Canada
          </p>
        </div>

        {/* Card 2: Call Us */}
        <div className="bg-white border shadow p-6 rounded-lg flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <SiOpencollective className="text-red-600 text-2xl" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Opening Hours</h2>
          <p className="text-gray-600">24/7</p>
        </div>

        {/* Card 3: Mail Us */}
        <div className="bg-white border shadow p-6 rounded-lg flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <FaEnvelope className="text-red-600 text-2xl" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Mail Us</h2>
          <p className="text-gray-600">
            Cyphanetglobalconcept@gmail.com


          </p>
        </div>



      </div>
      <ContactSection />
    </div>
  );
}

export default ContactUs
import React from "react";
import heroImage from "../assets/services_contact.jpg";
import { Link } from "react-router-dom";

const ServicesContact = () => {
    return (
        <div className="bg-gray-100">


            <section className=" px-4 py-10 md:py-[90px] flex flex-col-reverse md:flex-row items-center md:max-w-[90%] mx-auto ">
                {/* Text Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                        Have A Project In Mind?
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-gray-700 mb-4">
                        At Cyphanet, we specialize in advanced cybersecurity solutions that safeguard businesses around the globe. Our dedicated team ensures your systems remain secure, resilient, and prepared for emerging threats.
                    </p>
                    <p className="text-gray-700 mb-6">
                        By leveraging cutting-edge encryption, proactive threat detection, and rigorous compliance standards, Cyphanet delivers customized strategies that protect your most valuable data, helping you maintain trust in a rapidly evolving digital landscape.
                    </p>


                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                        <Link to='/contact'>
                            Send Message
                        </Link>
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={heroImage}
                        alt="hero_img"
                        className="max-w-full h-auto rounded-xl"
                    />
                </div>
            </section>
        </div>
    );
};

export default ServicesContact;

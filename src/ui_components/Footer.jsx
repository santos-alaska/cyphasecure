import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#000219] text-white pt-10 pb-6">
            <div className="max-w-[90%] mx-auto px-4">
                {/* Top Section: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* 1. Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Cyphanet</h2>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            At Cyphanet, we provide advanced cybersecurity solutions tailored to protect
                            your digital ecosystem. Our mission is to safeguard your data, empower your
                            operations, and ensure you stay one step ahead of emerging threats.
                        </p>
                    </div>

                    {/* 2. Address */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-4">Address</h3>
                        <p className="text-[15px] mb-2">
                            Alberta,
                            Canada
                        </p>
                        <p className="text-[15px] mb-2">
                            Info@cyphasecure.com<br />
                        </p>

                    </div>

                    {/* 3. Solution */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-4">Solutions</h3>
                        <ul className="space-y-2 text-[15px]">
                            {[
                                "Secure Private Cloud",
                                "Online Backup",
                                "Secure Website",
                                "CyberSec",
                                "Enterprise Networks",
                                "Collaboration",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-4">Resources</h3>
                        <ul className="space-y-2 text-[15px]">
                            {[
                                "Cybersecurity Strategies",
                                "Security Advisories",
                                "Security News",
                                "Case Studies",
                                "User Guides",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-4 border-t border-gray-700 text-center  text-sm text-gray-400">
                    <p className="mb-4 md:mb-0">
                        © 2025 Cyphanet. All <span className="text-red-500">rights reserved</span>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

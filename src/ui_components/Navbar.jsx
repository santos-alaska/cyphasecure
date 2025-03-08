import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cyphanet_logo from "../assets/cyphanet_logo.png";
import cyphanet_logo_cut from "../assets/cyphanet_logo_cut.png";

// Define your navigation links in an array
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  // For highlighting the active link
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Set initial background state based on current page
  useEffect(() => {
    if (!isHomePage) {
      setNavBg(true);
    } else {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    }
  }, [location.pathname, isHomePage]);

  // Listen for scroll to change navbar background (only on homepage)
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        if (window.scrollY > 50) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 py-1 md:py-3.5 transition-colors duration-500 ${
        navBg || isOpen ? "bg-[#000219] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90%] mx-auto text-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={cyphanet_logo_cut}
              alt="logo"
              className="-ml-1 w-[40px] md:w-[50px]"
            />
            <h1 className="font-bold ml-2 text-[19px] md:text-[28px] -mt-1 text-white">
              Cyphanet
            </h1>
          </div>

          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-10 text-[18px]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-0.5 px-1 font-semibold border-b-2 border-transparent
                    hover:border-red-600 transition-colors duration-500
                    ${isActive(link.path) ? "border-red-600" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Get Started Button (Desktop) */}
            <div className="hidden md:flex items-center ml-[50px]">
              <Link
                to="/contact"
                className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 transition font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon container */}
                <div className="relative w-6 h-6">
                  {/* Hamburger Icon */}
                  <svg
                    className={`absolute top-0 left-0 transition-opacity duration-300 ${
                      !isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close Icon */}
                  <svg
                    className={`absolute top-0 left-0 transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (collapsible with transition) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-5 sm:px-3 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-center"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-red-500 hover:bg-red-600 text-white text-center px-4 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import cyphanet_logo from "../assets/cyphanet_logo.png";

// // Define your navigation links in an array
// const navLinks = [
//   { path: "/", label: "Home" },
//   { path: "/services", label: "Services" },
//   { path: "/about", label: "About" },
//   { path: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [navBg, setNavBg] = useState(false);
  
//   // For highlighting the active link
//   const location = useLocation();

//   // Listen for scroll to change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setNavBg(true);
//       } else {
//         setNavBg(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Utility function to check if a link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-50 py-3.5 transition-colors duration-500  ${
//         navBg  ? "bg-[#000219] shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-[90%] mx-auto text-white">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <img src={cyphanet_logo} alt="logo" className="w-[250px]" />
//           </div>

//           <div className="flex items-center">
//             {/* Desktop Menu */}
//             <div className="hidden md:ml-6 md:flex md:items-center md:space-x-10 text-[18px]">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`
//                      py-0.5 px-1 font-semibold border-b-2  border-transparent
//                     hover:border-red-600 transition-colors duration-500
//                     ${isActive(link.path) ? "border-red-600" : ""}
//                   `}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Get Started Button (Desktop) */}
//             <div className="hidden md:flex items-center ml-[50px]">
//               <Link
//                 to="/contact"
//                 className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 transition font-semibold"
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <div className="flex items-center md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isOpen}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   // Hamburger Icon
//                   <svg
//                     className="block h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   // X (Close) Icon
//                   <svg
//                     className="block h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (collapsible) */}
//       {isOpen && (
//         <div className="md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)} // Close menu after click
//                 className="block px-3 py-2 hover:text-gray-200 hover:bg-gray-700 rounded"
//               >
//                 {link.label}
//               </Link>
//             ))}

//             <Link
//               to="/contact"
//               className="block bg-red-500 hover:bg-red-600 text-white text-center px-4 py-2 rounded transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Get A Quote
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white fixed top-0 w-full shadow-2xl z-50 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Brand Name */}
          <div className="text-3xl font-extrabold tracking-wider text-yellow-300">
         NPO
          </div>

          {/* Nav Links for Large Screens */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <button
                className="hover:text-yellow-400 transition duration-300"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:text-yellow-400 transition duration-300"
                onClick={() => scrollToSection("MissionStatement")}
              >
                Mission
              </button>
            </li>
            <li>
              <button
                className="hover:text-yellow-400 transition duration-300"
                onClick={() => scrollToSection("DonationForm")}
              >
                DonationForm
              </button>
            </li>
          </ul>

          {/* Hamburger Button for Small Screens */}
          <div className="md:hidden">
            <button
              className="text-yellow-300 hover:text-yellow-200 transition duration-300"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center z-50 min-w-full shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-yellow-300 hover:text-yellow-200 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Dropdown Links */}
            <ul className="space-y-6 text-lg font-semibold min-w-full text-center py-8">
              <li>
                <button
                  className="hover:text-yellow-300 transition duration-300"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-300 transition duration-300"
                  onClick={() => scrollToSection("MissionStatement")}
                >
                  Mission
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-300 transition duration-300"
                  onClick={() => scrollToSection("DonationForm")}
                >
                  DonationForm
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

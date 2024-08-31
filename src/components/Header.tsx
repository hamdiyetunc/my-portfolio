import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex items-center text-3xl font-bold mb-2 md:mb-0">
          <img src="/assets/ht-logo.png" alt="HT Logo" className="h-20 mr-2" />
        </div>
        <nav className="flex space-x-4 md:space-x-8">
          <a
            href="/"
            onClick={() => handleMenuItemClick("home")}
            className={`bg-transparent text-white px-4 py-2 rounded-full transition-colors ${
              selectedMenuItem === "home"
                ? "bg-yellow-300 text-black"
                : "hover:bg-yellow-300 hover:text-black"
            }`}
          >
            Home
          </a>
          <a
            href="/aboutme"
            onClick={() => handleMenuItemClick("aboutme")}
            className={`bg-transparent text-white px-4 py-2 rounded-full transition-colors ${
              selectedMenuItem === "aboutme"
                ? "bg-yellow-300 text-black"
                : "hover:bg-yellow-300 hover:text-black"
            }`}
          >
            About Me
          </a>
          <a
            href="/projects"
            onClick={() => handleMenuItemClick("projects")}
            className={`bg-transparent text-white px-4 py-2 rounded-full transition-colors ${
              selectedMenuItem === "projects"
                ? "bg-yellow-300 text-black"
                : "hover:bg-yellow-300 hover:text-black"
            }`}
          >
            Projects
          </a>
          <a
            href="/contact"
            onClick={() => handleMenuItemClick("contact")}
            className={`bg-transparent text-white px-4 py-2 rounded-full transition-colors ${
              selectedMenuItem === "contact"
                ? "bg-yellow-300 text-black"
                : "hover:bg-yellow-300 hover:text-black"
            }`}
          >
            Contact
          </a>
        </nav>
        <div
          className="relative mt-4 md:mt-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-yellow-300 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors flex items-center"
          >
            Languages
            <FaChevronDown className="ml-2" />
          </a>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                English
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                Turkish
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                French
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com",
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      href: "https://x.com",
      icon: <FaTwitter />,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.youtube.com",
      icon: <FaYoutube />,
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          {socialMediaLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

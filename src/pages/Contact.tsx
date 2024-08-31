import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Contact
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          You can connect with me through the following platforms:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md h-64">
            <FaEnvelope className="text-yellow-500 text-5xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800">Email</h4>
            <a
              href="mailto:hamdiyetunc7@gmail.com"
              className="text-gray-700 mt-2 flex items-center hover:text-yellow-500 transition-colors duration-200 group"
            >
              Email Me
              <div className="ml-2 w-3 h-3 border-t-2 border-r-2 border-gray-700 transform rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-yellow-500"></div>
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md h-64">
            <FaGithub className="text-yellow-500 text-5xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800">GitHub</h4>
            <p className="text-gray-700 mt-2">
              <a
                href="https://github.com/hamdiyetunc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                github.com/hamdiyetunc
              </a>
            </p>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md h-64">
            <FaLinkedin className="text-yellow-500 text-5xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800">LinkedIn</h4>
            <p className="text-gray-700 mt-2">
              <a
                href="https://www.linkedin.com/in/hamdiyetunc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                linkedin.com/hamdiyetunc
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Home: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hello, I'm Hamdiye Tunç.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I'm a software developer specializing in creating modern web
            applications.
          </p>
          <a
            href="#projects"
            className="bg-yellow-300 text-black px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            My Projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">My Projects</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {/* Example Project */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs md:max-w-sm w-full">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project Title
              </h3>
              <p className="text-gray-700 mb-4">
                A brief description or information about the project.
              </p>
              <a href="#" className="text-purple-500 hover:underline">
                View Details
              </a>
            </div>
            {/* Add more projects here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <p className="text-lg mb-6">
            You can use the contact form below to get in touch with me.
          </p>
          <a
            href="hamdiyetunc7@gmail.com"
            className="bg-yellow-300 text-black px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React & TypeScript</li>
            <li>Node.js & Express</li>
            <li>HTML & CSS</li>
            <li>Databases (MySQL, MongoDB)</li>
            {/* Add more skills here */}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;

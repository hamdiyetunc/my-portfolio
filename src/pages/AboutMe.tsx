import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          About Me
        </h2>
        <p className="text-lg mb-12 text-gray-600 text-center">
          I'm a passionate software developer with a keen interest in building
          innovative and efficient solutions. With experience in various
          technologies, I enjoy solving complex problems and creating
          user-friendly applications.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Personal Info */}
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Hi, I'm Hamdiye Tunç
            </h3>
            <p className="text-gray-600 mb-4">
              I have a background in [Your Field/Background], and my expertise
              lies in [Key Skills or Technologies]. Over the years, I've worked
              on diverse projects ranging from [Type of Projects] to [Other
              Types of Projects]. My goal is to continuously learn and improve
              my skills while contributing to meaningful projects.
            </p>
            <p className="text-gray-600">
              When I'm not coding, I enjoy [Your Hobbies or Interests]. I'm
              always open to new opportunities and collaborations, so feel free
              to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

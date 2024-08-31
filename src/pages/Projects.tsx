import React from "react";

const projectsData = [
  {
    title: "Project One",
    description:
      "A brief description of Project One. It showcases the main features and technologies used.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project Two",
    description:
      "A brief description of Project Two. It highlights the key aspects and functionality.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project Three",
    description:
      "A brief description of Project Three. It explains the main objectives and results.",
    image: "https://via.placeholder.com/150",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Projects
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          Here are some of the projects I’ve worked on recently. Feel free to
          explore and get in touch!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md h-64"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

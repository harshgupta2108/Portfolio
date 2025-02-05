import React from 'react';

const ProjectCardLeft = ({ project }) => {
  const { title, description, image, techStack, links } = project;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="flex flex-col md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 my-4">{description}</p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            View It Here
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;

import React from 'react';
import ProjectCardLeft from './Projectcardleft.jsx';
import ProjectCardRight from './Projectcardright.jsx';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'MovieFlex',
      description:
        'I developed a dynamic movie collections web application using React, styled with Tailwind CSS, and managed state with Redux. The application integrates with the TMDb API to fetch movie data, allowing users to view movie details, ratings, and trailers.',
      image: '/path-to-movieflex-image.png',
      techStack: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
      links: {
        live: 'https://movieflex.live',
        github: 'https://github.com/movieflex',
      },
    },
    {
      id: 2,
      title: 'Another Project',
      description: 'Description of another project...',
      image: '/path-to-another-project-image.png',
      techStack: ['HTML', 'CSS', 'React'],
      links: {
        live: 'https://anotherproject.live',
        github: 'https://github.com/anotherproject',
      },
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {projects.map((project, index) =>
        index % 2 === 0 ? (
          <ProjectCardLeft key={project.id} project={project} />
        ) : (
          <ProjectCardRight key={project.id} project={project} />
        )
      )}
    </div>
  );
};

export default Project;

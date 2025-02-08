import React from "react";

const ProjectCard = ({ title, videoSrc, techStack, repoLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <video controls className="w-full rounded-lg mb-3">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-700"><strong>Tech Stack:</strong> {techStack}</p>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View on GitHub
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <ProjectCard
        title="Flex Forge"
        videoSrc="/videos/flexForge.mp4"
        techStack="React, Node.js, Axios, pg, Ruby on Rails"
        repoLink="https://github.com/RemiBorris/flex-forge"
      />
      <ProjectCard
        title="SmartToDo"
        videoSrc="/videos/smartToDo.mp4"
        techStack="JavaScript, Axios, bcrypt, pg, dotenv, ejs"
        repoLink="https://github.com/RemiBorris/Smart_TODO"
      />
      <ProjectCard
        title="Photolabs"
        videoSrc="/videos/photolabs.mp4"
        techStack="React, Express, ReactDOM, pg"
        repoLink="https://github.com/RemiBorris/photolabs"
      />
      <ProjectCard
        title="Tweeter"
        videoSrc="/videos/tweeter.mp4"
        techStack="HTML, CSS, JavaScript, jQuery, Node.js, Express"
        repoLink="https://github.com/RemiBorris/tweeter"
      />
    </div>
  );
};

export default Projects;
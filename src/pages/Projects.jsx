import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProjectCard = ({ title, videoSrc, gifSrc, techStack, repoLink, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6" id={id}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {/* <video controls className="w-full rounded-lg mb-3">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src={gifSrc} alt={title} className="w-full rounded-lg mb-3" />
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="md:max-w-4x1 lg:max-w-6xl mx-auto p-6">
      {/* <img src="/videos/flexForge.gif" alt="Flex Forge" /> */}
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="md:grid xl:grid-cols-3 md:gap-10 lg:grid-cols-2 grid-cols-1 gap-6">
        <ProjectCard
          title="Flex Forge"
          // videoSrc="/videos/flexForge.mp4"
          gifSrc="/videos/flexForge.gif"
          techStack="React, Node.js, Axios, PostgreSQL, Ruby on Rails"
          repoLink="https://github.com/RemiBorris/flex-forge"
          id="flexforge"
        />
        <ProjectCard
          title="SmartToDo"
          // videoSrc="/videos/smartToDo.mp4"
          gifSrc="/videos/smartToDo.gif"
          techStack="JavaScript, Axios, bcrypt, PostgreSQL, dotenv, ejs"
          repoLink="https://github.com/RemiBorris/Smart_TODO"
          id="smarttodo"
        />
        <ProjectCard
          title="Photolabs"
          // videoSrc="/videos/photolabs.mp4"
          gifSrc="/videos/photolabs.gif"
          techStack="React, Express, ReactDOM, PostgreSQL"
          repoLink="https://github.com/RemiBorris/photolabs"
          id="photolabs"
        />
        <ProjectCard
          title="Tweeter"
          // videoSrc="/videos/tweeter.mp4"
          gifSrc="/videos/tweeter.gif"
          techStack="HTML, CSS, JavaScript, jQuery, Node.js, Express"
          repoLink="https://github.com/RemiBorris/tweeter"
          id="tweeter"
        />
        <ProjectCard
          title="TinyApp"
          gifSrc="/videos/tinyApp.gif"
          techStack="Node.js, Express, EJS, bcrypt, cookie-session, method-override"
          repoLink="https://github.com/RemiBorris/tinyapp"
          id="tinyapp"
        />
        <ProjectCard
          title="Jungle"
          gifSrc={"/videos/jungle.gif"}
          techStack="Rails, Bootstrap, PostgreSQL, Stripe"
          repoLink="https://github.com/RemiBorris/jungle-rails"
          id="jungle"
        />
        <ProjectCard
          title="Scheduler"
          gifSrc={"/videos/scheduler.gif"}
          techStack="Axios, Classnames, Normalize.css, React, React-dom, React-scripts"
          repoLink="https://github.com/RemiBorris/scheduler"
          id="scheduler"
        />
      </div>
    </div>
  );
};

export default Projects;
import React from "react";
import headshot from "../assets/images/Remi Borris - Headshot.jpg"
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="max-w-3x1 mx-auto mt-12 p-6 bg-white shadow-lg rounded-2x1">
      <div className="flex flex-col items-center">
        <img 
          src={headshot}
          alt="Remi Borris"
          className="w-40 h-40 object-cover rounded-full shadow-md border-md border-gray-300"
        />
        <h1 className="text-3-1 font-bold text-gray-900 mt-4">Remi Borris</h1>
        <h2 className="text-x1 text-gray-600 font-medium mt-2">About Me</h2>
      <div className="mt-6 text-gray-700 space-y-4">
          <p>
            Hi, I’m Remi Borris, a web developer with a passion for building efficient, user-friendly applications. With a strong foundation in both front-end and back-end development, I specialize in JavaScript, React, Ruby on Rails, and Node.js, creating dynamic and responsive web experiences.
          </p>
          <p>
            My journey into web development was fueled by my love for problem-solving and technology. After spending over a decade in operations management, where I honed skills in project planning, communication, and team leadership, I took on the challenge of transitioning into software development. Balancing full-time work while completing an intensive Web Development Diploma at Lighthouse Labs was both demanding and rewarding, reinforcing my ability to adapt, learn quickly, and stay committed to my goals.
          </p>
          <p>
            Through projects like <Link to="/projects" className="font-semibold text-blue-500 hover:underline">Flex Forge</Link>,{" "}
            <Link to="/projects" className="font-semibold text-blue-500 hover:underline">PhotoLabs</Link>, and{" "}
            <Link to="/projects" className="font-semibold text-blue-500 hover:underline">SmartTODO</Link>, I have applied my knowledge to develop functional, scalable applications that enhance user experience. I am eager to continue learning and growing in this field, applying my technical expertise, problem-solving abilities, and strong work ethic to real-world development challenges.
          </p>
          <p>
            I’m excited about opportunities to contribute to innovative teams, collaborate on impactful projects, and bring creative ideas to life through code. Feel free to explore my work and reach out—I’d love to connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
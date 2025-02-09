import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2x1 p-6 mt-12">
      <h2 className="text-2x1 font-bold text-gray-900 mb-4">Contact</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center space-x-2">
          <MdEmail className="text-lg"/> 
          <span className="hidden sm:inline font-semibold">Email:</span>{" "}
          <a 
            href="mailto:remi.borris@gmail.com"
            className="text-blue-500 hover:underline font-semibold"
          >
            RemiBorris@gmail.com 
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lg"/>
          <span className="hidden sm:inline font-semibold">Phone:</span>
          <span className="font-semibold">506-380-1101</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaLinkedin className="text-lg"/>
          <span className="hidden sm:inline font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/RemiBorris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
            linkedin.com/in/RemiBorris
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaGithub className="text-lg"/>
          <span className="hidden sm:inline font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/RemiBorris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
          github.com/RemiBorris
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
import React from "react";

const Contact = () => {

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2x1 p-6 mt-8">
      <h2 className="text-2x1 font-bold text-gray-900 mb-4">Contact</h2>
      <ul className="space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">Email: RemiBorris@gmail.com</span>
        </li>
        <li>
          <span className="font-semibold">Phone: 506-380-1101</span>
        </li>
        <li>
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/RemiBorris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover: underline"
          >
            linkedin.com/in/RemiBorris
          </a>
        </li>
        <li>
          <span className="font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/RemiBorris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover: underline"
          >
          github.com/RemiBorris
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
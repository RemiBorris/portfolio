import React from "react";
import Button from "../components/Button";

const resumeID = "1H0q4OQaAcawpHDqHRWNNUHy0pBV63qcV";
const resumePreviewURL = `https://drive.google.com/file/d/${resumeID}/preview`;
const resumeDownloadURL = `https://drive.google.com/uc?export=download&id=${resumeID}`;

const Resume = () => {

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>

      <iframe
        src={(resumePreviewURL)}
        className="hidden md:flex w-full max-w-screen-lg h-[calc(100vh-350px)] border border-gray-300"
      ></iframe>

      {/* Download Button */}
      <a href={resumeDownloadURL} download className="mt-4">
        <Button text="Download Resume" />
      </a>
    </div>
  );
};

export default Resume;

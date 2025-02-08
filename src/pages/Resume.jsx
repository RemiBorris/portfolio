import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../components/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>

      <div className="w-full max-w-screen-md flex md:justify-center overflow-auto">
        <Document
          file="/Remi-Borris-Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
        >
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                renderTextLayer={false} 
                renderAnnotationLayer={false} 
                className="w-full max-w-full h-auto"
                scale={1.0}
              />
            ))
          }
        </Document>
      </div>

      {/* Download Button */}
      <a href="/Remi-Borris-Resume.pdf" download className="mt-4">
        <Button text="Download Resume" />
      </a>
    </div>
  );
};

export default Resume;

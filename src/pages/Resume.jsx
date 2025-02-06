import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../components/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>

      <div className="border rounded-lg shadow-lg p-4 w-full max-w-3xl">
        <Document
          file="/Remi-Borris-Resume.pdf"
          renderMode="canvas"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
        >
          {Array.from({ length: numPages || 0 }, (_, index) => (
            <Page key={index} pageNumber={index + 1} />
          ))}
        </Document>
      </div>

      <Button
        text="Download PDF"
        variant="primary"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Remi-Borris-Resume.pdf"; // Path to PDF
          link.download = "Remi-Borris-Resume.pdf"; // Suggested download name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />
    </div>
  );
};

export default Resume;

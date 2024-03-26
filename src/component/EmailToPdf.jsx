import React, { useState } from "react";

const EmailToPDFConverter = () => {
  const [pdfData, setPdfData] = useState(null);

  const convertEmailToPDF = async () => {
    try {
      const response = await fetch("http://localhost:5000/retriveEmailData");
      if (!response.ok) {
        throw new Error("Failed to convert email to PDF");
      }
      const pdfData = await response.text();
      setPdfData(pdfData);
    } catch (error) {
      console.error("Error converting email to PDF:", error);
    }
  };

  return (
    <div>
      <button onClick={convertEmailToPDF}>Convert Email to PDF</button>
      {pdfData && (
        <embed
          src={`data:application/pdf;base64,${pdfData}`}
          width="800px"
          height="600px"
        />
      )}
    </div>
  );
};

export default EmailToPDFConverter;

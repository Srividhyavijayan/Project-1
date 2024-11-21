import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const UploadLogo: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Logo</h2>
      <p>Drag and drop your logo file or click to browse</p>
      
      <div
        className={`upload-box ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload size={40} className="upload-icon" />
        <p>Drop your file here or</p>
        <a href="#" className="upload-link">browse files</a>
      </div>
    </div>
  );
};

export default UploadLogo;
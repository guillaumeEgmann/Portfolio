import React from 'react';
import './Experience.css';


const Experience = () => {
  const experiences = [
    {
      date: "2024 - 4 months",
      title: "Internship - Mechanical Engineer",
      company: "Foodles (Startup)",
      description: "Conducted test campaigns on RFID technology. Design of 3D parts for connected refrigerators. Identification and analysis of refrigerator issues and proposal of solutions."
    },
    {
      date: "2022 - 2023",
      title: "Co-Founder & Co-President",
      company: "Leonard de Vinci Student Surf Association",
      description: "Creation and Management of a 45-member association. Surfboard design. Participation in the largest student surfing competition."
    },
    {
      date: "2022 - 3 months",
      title: "Internship - Quality Engineer",
      company: "Arianespace",
      description: "Development of safety and risk management documentation for Ariane 5 and Vega launch campaigns. Learning risk management for sensitive projects. Participation in quality missions in high-risk areas."
    }
    
  ];

  return (
    <div className="experience-section">
      <div className="experience-header">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <div className="date">{exp.date}</div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 
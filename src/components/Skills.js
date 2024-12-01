import React from 'react';
import './Skills.css';

const Skills = () => {
  const languages = [
    { name: "French - Native" },
    { name: "English - TOIEC 945" },
    { name: "Spanish - B1" }
  ];
  const hardSkills = [
    { name: "3D modeling" },
    { name: "Fast Prototyping" },
    { name: "Biomaterials" },
    { name: "Electronics" },
    { name: "Eco-design" },
    { name: "Marketing" },
    { name: "Adobe XD" }
  ];

  const softSkills = [
    { name: "Leadership" },
    { name: "Quick Learning"},
    { name: "Team Work" },
    { name: "Communication" },
    { name: "Adaptability" },
    { name: "Creativity" },
    { name: "Problem Solving" }
  ];

  return (
    <div className="skills-section">

      {/* Languages */}
      <div className="skills-category">
        <div className="skills-header">
          <h2>Languages</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-container">
          {languages.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Hard Skills */}
      <div className="skills-category">
        <div className="skills-header">
          <h2>Hard Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-container">
          {hardSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skills-category">
        <div className="skills-header">
          <h2>Soft Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-container">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 
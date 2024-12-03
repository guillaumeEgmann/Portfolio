import React from 'react';
import './Projectcards.css';
import projectKite from '../assets/wissant-59.jpg';
import projectBag from '../assets/Face bleu.png';
import projectKickstar from '../assets/kolobaniere3.png';

const Projectcards = () => {
  const projects = [
    {
      title: "Recyclable Kiteboard",
      description: "Design of the first recyclable kiteboard in the world",
      image: projectKite,
      technologies: ["Recyclable", "Composite", "Prototyping"],
      link: "./kiteboard"
    },
    {
        title: "Upcycled luxury bag",
        description: "A luxury bag  made of leather scraps",
        image: projectBag,
        technologies: ["Upcycling", "Leather", "Seewing"],
        link: "/bag"
      },
      {
        title: "Kickstar - KOLOBIGO",
        description: "Crowdfunding campaign to create a project with an overview at 360°",
        image: projectKickstar,
        technologies: ["Crowdfunding", "Upcycled", "Supply Chain"],
        link: "https://www.kickstarter.com/projects/kolobigo/quickstarter-kolobigo-the-ultimate-phone-strap?lang=fr"
      },
    // Ajoutez d'autres projets...
  ];

  return (
    <div className="projects-section">
      {/*<h2 className="side-title"></h2>*/}
      <div className="projects-container">
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <div className="project-layout" key={index}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Voir le projet
                </a>
              </div>
              
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectcards;

import React from 'react';
import './Projectgrid.css';
import projectKite from '../assets/wissant-59.jpg';
import projectBag from '../assets/Face bleu.png';
import projectSkateboard from '../assets/14.jpg';
import projectWatch from '../assets/14.jpg';
import projectCamera from '../assets/14.jpg';
import projectHeadphone from '../assets/14.jpg';

const Projectgrid = () => {
  const projects = [
    {
      title: "Recyclable Kiteboard",
      description: "The first kiteboard of the world, designed to enhance the practice of kitesurfing",
      image: projectKite,
      technologies: ["Recycling ", "Sport", "Resin"],
      link: "./kiteboard"
    },
    {
      title: "Upcycled Luxury Bag",
      description: "A luxury bag made from upcycled materials. Inspired by cutting edge fashion",
      image: projectBag,
      technologies: ["React", "Redux", "Stripe"],
      link: "/bag"
    },
    {
      title: "Skate Spots",
      description: "Application communautaire pour partager les meilleurs spots de skateboard",
      image: projectSkateboard,
      technologies: ["React Native", "Firebase", "Maps API"],
      link: "https://github.com/..."
    },
    {
      title: "Smart Watch UI",
      description: "Interface utilisateur pour une montre connectée de sport",
      image: projectWatch,
      technologies: ["Flutter", "Bluetooth API", "Health Kit"],
      link: "https://github.com/..."
    },
    {
      title: "Photo Portfolio",
      description: "Site portfolio pour photographe professionnel avec galerie dynamique",
      image: projectCamera,
      technologies: ["Next.js", "Prisma", "AWS S3"],
      link: "https://github.com/..."
    },
    {
      title: "Audio Stream",
      description: "Application de streaming audio haute qualité",
      image: projectHeadphone,
      technologies: ["Vue.js", "Web Audio API", "Node.js"],
      link: "https://github.com/..."
    }
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="grid-card"
            onClick={() => handleCardClick(project.link)}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="card-content">
              <div className="card-title">
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectgrid;

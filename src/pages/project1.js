import React from 'react';
import Projectgrid from '../components/Projectgrid';
import '../pages/project1.css';

const Project1 = () => {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <Projectgrid />
    </div>
  );
};

export default Project1;
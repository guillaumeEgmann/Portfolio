import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <ProfileHeader />
      
      <div className="about-description">
        <p className="description-text">
          <span className="highlight">Engineering student at ESILV</span>, I currently work in 
          <span className="highlight"> Project Management</span> and <span className="highlight">R&I</span>, with a particular focus on 
          sustainable innovations. 
          <br /><br />
          With a strong entrepreneurial spirit, I aim to transform the worlds of  
          <span className="emphasis"> sports</span> and <span className="emphasis">luxury</span>, 
          which I am passionate about, through innovative and sustainable projects.
        </p>
      </div>

      <Skills />
      <Experience />
    </div>
  )
}

export default About

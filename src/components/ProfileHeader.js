import React from 'react';
import './ProfileHeader.css';
import ppW from '../assets/ppW.jpg';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="profile-image-container">
        <div className="rotating-border"></div>
        <div className="rotating-border-2"></div>
        <div className="rotating-border-3"></div>
        <img 
          src={ppW} 
          alt="Profile" 
          className="profile-image"
        />
      </div>
      <div className="profile-info">
        <h1>Guillaume EGMANN</h1>
        <h2>Engineer & Product Designer</h2>
      </div>
    </div>
  );
};

export default ProfileHeader;

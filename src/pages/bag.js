import React from 'react';
import './bag.css';
import bagImage1 from '../assets/Face bleu.png';
import bagImage2 from '../assets/haut.png';
import bagImage3 from '../assets/sacbleu.png';

const Bag = () => {
  return (
    <div className="bag-container">
      <div className="bag-header">
        <h1>Upcycled Luxury Bag</h1>
        <p>A luxury bag made of leather scraps</p>
      </div>

      <div className="bag-content">
        <div className="text-section">
          <p>
            This project focuses on creating luxury accessories from upcycled leather materials. 
            Each piece is unique, handcrafted with attention to detail and sustainability in mind.
          </p>
        </div>

        <div className="image-section">
          <img src={bagImage1} alt="Bag front view" />
        </div>

        <div className="text-section">
          <p>
            The design combines traditional craftsmanship with modern aesthetics, 
            giving a second life to premium leather scraps.
          </p>
        </div>

        <div className="image-section">
          <img src={bagImage2} alt="Bag details" />
        </div>

        <div className="text-section">
          <p>
            Every bag is a unique piece, showcasing the beauty of sustainable luxury.
          </p>
        </div>

        <div className="image-section">
          <img src={bagImage3} alt="Bag interior" />
        </div>
      </div>
    </div>
  );
};

export default Bag;

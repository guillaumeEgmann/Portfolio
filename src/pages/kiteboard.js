import React from 'react';
import ModelKite from '../components/modelKite';
import './kiteboard.css';
import Navbar from '../components/Navbar';
import wissant from '../assets/wissant-3.png';
import lille5 from '../assets/lille-5.jpg';
import conception30 from '../assets/wissant-55.jpg';
import conception6 from '../assets/conception-6.jpg';
import wissant2 from '../assets/wissant-59.jpg';


const Kiteboard = () => {
  return (
    <div className="kiteboard-container">
      <Navbar />
      <section className="section first">
        <div className="main-title">
          <h1>FOREVER</h1>
        </div>
        <div className="content-wrapper">
          <div className="text-content">
            <h1>1<sup>st</sup> Recyclable Kiteboard in the world</h1>
            <p className="description"> 
              A new approach to design for a sustainable sport.
            </p>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/1SNCV6HQ0gI?autoplay=0&rel=0"
              title="Présentation Kiteboard"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      
      <div className="rolling-banner">
        <div className="banner-content">
          <span>Recyclable</span>
          <span className="dot">•</span>
          <span>Kiteboard</span>
          <span className="dot">•</span>
          <span>Recyclable</span>
          <span className="dot">•</span>
          <span>Kiteboard</span>
          <span className="dot">•</span>
        </div>
      </div>

      <section className="section second">
        <div className="content-wrapper-2">
          <div className="text-content-2">
            <h2>Save our playground</h2>
            <p>
              We want to make kiteboarding more accessible and sustainable.
              <br/>
              By designing a recyclable kiteboard, which will bring us closer to our playground and values.
              <br/>
              Changing the future of kiteboarding.
            </p>
          </div>
          <div className="image-content-2">
            <img 
              src={wissant} 
              alt="Sustainable Kiteboarding" 
              className="section-image"
            />
          </div>
        </div>
      </section>
      
      <section className="section third">
        <div className="text-container">
          <h2>Technologie</h2>
          <p>Made of a recyclable resin matrix, the kiteboard is 100% recyclable.<br/>
          This allows to separate the components and recycle them.</p>
        </div>
        
        <div className="images-sequence-vertical">
          <div className="image-column">
            <img src={lille5} alt="Technology 1" className="stacked-image" />
            <img src={conception30} alt="Technology 2" className="stacked-image" />
            <img src={conception6} alt="Technology 3" className="stacked-image" />
            <img src={wissant2} alt="Technology 4" className="stacked-image" />
          </div>
        </div>
      </section>

      {/*<div className="rolling-banner">
        <div className="banner-content">
          <span>RECYCLABLE</span>
          <span className="dot">•</span>
          <span>SUSTAINABLE</span>
          <span className="dot">•</span>
          <span>ECO-FRIENDLY</span>
          <span className="dot">•</span>
          <span>RECYCLABLE</span>
          <span className="dot">•</span>
          <span>SUSTAINABLE</span>
          <span className="dot">•</span>
        </div>
      </div>*/}

      <section className="section fourth">
        <h2>Caracteristics</h2>
        <p>Discover more about the materials present in the kiteboard</p>
      </section>

      <div className="model-container">
        <ModelKite />
      </div>
    </div>
  );
};

export default Kiteboard;

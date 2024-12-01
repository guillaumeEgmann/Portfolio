import React, { useEffect, useState } from 'react';
import './App.css';
import backgroundImage from './assets/14.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project1 from './pages/project1';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './pages/About';
import Projectcards from './components/Projectcards';
import Kiteboard from './pages/kiteboard';
import Bag from './pages/bag';



//import Hero from './components/Hero';

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector('.projects-section');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        setIsFixed(rect.top <= 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" style={{ 
      position: 'relative'
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        //backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.3,
        zIndex: -1
      }} />

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        //backgroundColor: 'rgba(203, 0, 0, 0.3)',
        zIndex: -1
      }} />

      <div className="background-shapes">
        <div className="grid"></div>
        <div className="big-circle">
          <svg className="circle-svg">
            <circle 
              className="circle-path"
              cx="250" 
              cy="250" 
              r="249"
             
            />
          </svg>
        </div>
      </div>

      <Router>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <div >
                <section className="banner-section">
                  <Banner />
                </section>
                
                <section className="projects-section">
                  <h2 className={`side-title ${isFixed ? 'fixed' : ''}`}>
                    Latest Projects
                  </h2>
                  <Projectcards />
                </section>
                
              </div>
            }
            />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/About" element={<About />} />
            <Route path="/kiteboard" element={<Kiteboard />} />
            <Route path="/bag" element={<Bag />} />
            
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

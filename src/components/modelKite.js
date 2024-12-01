import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import './modelKite.css';
import * as THREE from 'three';

function Model({ selectedLayer, setSelectedLayer, currentSection, setCurrentSection }) {
  const modelRef = useRef();
  const gltf = useGLTF('/models/kiteboard-threejs v1.gltf');
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [previousSection, setPreviousSection] = useState(0);
  const spotLightRef = useRef();
  const pointLightRef = useRef();

  useEffect(() => {
    // Fonction pour détecter la section active
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Augmentation de l'offset pour la section 4 (index 3)
        const offset = index === 3 ? 150 : 0;  // Augmenté de 200 à 400
        
        if (scrollPosition >= sectionTop - sectionHeight / 3 - offset) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (!modelRef.current) return;

    // Configuration des lumières selon les sections
    const lightConfigs = [
      {
        spotLight: { color: '#ffffff', intensity: 0.8, position: [10, 10, 10] },
        pointLight: { color: '#ff9966', intensity: 1, position: [-10, -10, -10] },
        ambient: 0.5
      },
      {
        spotLight: { color: '#6666ff', intensity: 1.2, position: [5, 15, 5] },
        pointLight: { color: '#ff6666', intensity: 0.8, position: [-5, -5, -15] },
        ambient: 0.3
      },
      {
        spotLight: { color: '#66ffcc', intensity: 1, position: [15, 5, 5] },
        pointLight: { color: '#ffcc66', intensity: 1.2, position: [-15, -5, -5] },
        ambient: 0.6
      },
      {
        spotLight: { color: '#ff99cc', intensity: 1.5, position: [8, 8, 8] },
        pointLight: { color: '#99ff99', intensity: 0.9, position: [-8, -8, -8] },
        ambient: 0.4
      }
    ];

    const currentLight = lightConfigs[currentSection];
    
    // Animation des lumières
    if (spotLightRef.current && pointLightRef.current) {
      // Couleur
      spotLightRef.current.color.lerp(new THREE.Color(currentLight.spotLight.color), 0.05);
      pointLightRef.current.color.lerp(new THREE.Color(currentLight.pointLight.color), 0.05);
      
      // Intensité
      spotLightRef.current.intensity += (currentLight.spotLight.intensity - spotLightRef.current.intensity) * 0.05;
      pointLightRef.current.intensity += (currentLight.pointLight.intensity - pointLightRef.current.intensity) * 0.05;
      
      // Position
      spotLightRef.current.position.lerp(new THREE.Vector3(...currentLight.spotLight.position), 0.05);
      pointLightRef.current.position.lerp(new THREE.Vector3(...currentLight.pointLight.position), 0.05);
    }

    // Positions différentes pour chaque section
    const positions = [
      { position: [0, 0, -1], rotation: [0, 0, 0], scale: 0.02 },
      { position: [-8, -2, 1], rotation: [0.5, 1.1, 0], scale: 0.004 },
      { position: [6.5, 0, -1], rotation: [-0.1, 0, 1.55], scale: 0.009 },
      { position: [3, -5, -1], rotation: [-1.3, -0.5, -1.57], scale: 0.007 }
      //{ position: [3, -5, -1], rotation: [-1.3, -0.5, -1.57], scale: 0.007 }
      //{ position: [-2, -1, -1], rotation: [0, 0, 0], scale: 0.009 }
    ];

   


    const target = positions[currentSection];
    
    // Animation fluide
    modelRef.current.position.x += (target.position[0] - modelRef.current.position.x) * 0.05;
    modelRef.current.position.y += (target.position[1] - modelRef.current.position.y) * 0.05;
    modelRef.current.position.z += (target.position[2] - modelRef.current.position.z) * 0.05;
    
    modelRef.current.rotation.x += (target.rotation[0] - modelRef.current.rotation.x) * 0.05;
    modelRef.current.rotation.y += (target.rotation[1] - modelRef.current.rotation.y) * 0.05;
    modelRef.current.rotation.z += (target.rotation[2] - modelRef.current.rotation.z) * 0.05;
    
    modelRef.current.scale.x += (target.scale - modelRef.current.scale.x) * 0.05;
    modelRef.current.scale.y += (target.scale - modelRef.current.scale.y) * 0.05;
    modelRef.current.scale.z += (target.scale - modelRef.current.scale.z) * 0.05;
  });

  useEffect(() => {
    // Vérifie si on entre dans la section 4 depuis la section 3 ou 5
    if (currentSection === 3 && (previousSection === 2 || previousSection === 4)) {
      // Animation vers la section 4
      let progress = 0;
      const animate = () => {
        progress += 0.02;
        setTransitionProgress(Math.min(1, progress));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    } 
    // Vérifie si on quitte la section 4 vers la section 3 ou 5
    else if ((currentSection === 2 || currentSection === 4) && previousSection === 3) {
      // Animation retour
      let progress = 1;
      const animate = () => {
        progress -= 0.02;
        setTransitionProgress(Math.max(0, progress));
        if (progress > 0) requestAnimationFrame(animate);
      };
      animate();
    }

    setPreviousSection(currentSection);
  }, [currentSection]);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          metalness: 0.9,
          roughness: 0.1,
          color: new THREE.Color(0x696969), // Couleur verte par exemple
          envMapIntensity: 1,
          transparent: true,
          opacity: 1
        });
      }
    });
  }, [gltf]);

  if (!gltf.scene) {
    return null;
  }

  if ((currentSection === 3 || (previousSection === 3 && transitionProgress > 0))) {
    const layers = [];
    const basePositions = [
      [3, -5, -1],
      [3.6, -3.8, -0.8],
      [2.4, -6.2, -0.6],
      [4.2, -2.6, -0.4],
      [1.8, -7.4, -0.2],
      [4.8, -1.4, 0]
     // Couche 5
    ];

    // Définir les positions et rotations de départ
    const startPosition = [6.5, 0, -1]; // Position de la section précédente
    const startRotation = [-0.1, 0, 1.55]; // Rotation de la section précédente

    for (let i = 0; i < 6; i++) {
      const clonedScene = gltf.scene.clone();
      
      /*
      // Position de base + décalage selon la sélection
      const offset = selectedLayer === i ? 0.5 : 0; // Décalage si sélectionné
      const currentPosition = [
        basePositions[i][0] + offset,
        basePositions[i][1],
        basePositions[i][2]
      ];*/

        // Interpolation des positions
        const currentPosition = [
          startPosition[0] + (basePositions[i][0] - startPosition[0]) * transitionProgress,
          startPosition[1] + (basePositions[i][1] - startPosition[1]) * transitionProgress,
          startPosition[2] + (basePositions[i][2] - startPosition[2]) * transitionProgress
        ];
  
        // Interpolation des rotations
        const targetRotation = [-1.3, -0.5, -1.57];
        const currentRotation = [
          startRotation[0] + (targetRotation[0] - startRotation[0]) * transitionProgress,
          startRotation[1] + (targetRotation[1] - startRotation[1]) * transitionProgress,
          startRotation[2] + (targetRotation[2] - startRotation[2]) * transitionProgress
        ];
  
        // Interpolation de l'opacité pour les clones supplémentaires
        const opacity = i === 0 ? 1 : transitionProgress;
  


      clonedScene.traverse((child) => {
        if (child.isMesh) {
          // Définir un matériau différent selon l'index de la couche
          switch(i) {
            case 0: // Couche de base
              child.material = new THREE.MeshStandardMaterial({ //paulownia
                color: new THREE.Color(0xb07800),
                metalness: 0.9,
                roughness: 0.9,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                opacity: selectedLayer === i ? 1 : 0.7,
                transparent: true,
              });
              break;
            case 1: // Système de fixation
              child.material = new THREE.MeshStandardMaterial({//carbone mid
                color: new THREE.Color(0x3c3b36),
                metalness: 0.1,
                //roughness: 0.1,
                opacity: selectedLayer === i ? 1 : 0.7,
                transparent: true,
              });
              break;
            case 2: // Renforts latéraux
              child.material = new THREE.MeshPhysicalMaterial({ //lin 2
                color: new THREE.Color(0xf2ca75),
                metalness: 0.8,
                roughness: 0.4,
                opacity: selectedLayer === i ? 1 : 0.7,
                transparent: true,
              });
              break;
            case 3: // Profil aérodynamique
              child.material = new THREE.MeshStandardMaterial({ //lin
                color: new THREE.Color(0xf2ca75),
                metalness: 0.7,
                roughness: 0.5,
                opacity: selectedLayer === i ? 1 : 0.7,
                transparent: true,
              });
              break;
            case 4: // Inserts techniques
              child.material = new THREE.MeshPhysicalMaterial({ //carbone bas
                color: new THREE.Color(0x3c3b36),
                metalness: 0.1,
                //roughness: 0.1,
                opacity: selectedLayer === i ? 1 : 0.7,
                transparent: true,
              });
              break;
            case 5: // Revêtement extérieur
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(0x3c3b36), // Carbone haut
                metalness: 0.1,
                
                opacity: 1,
                transparent: true,
              });
              break;
          }
        }
      });

      layers.push(
        <primitive 
          key={i}
          ref={i === 0 ? modelRef : undefined}
          object={clonedScene} 
          position={currentPosition}
          rotation={[-1.3, -0.5, -1.57]}
          scale={0.007}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedLayer(i === selectedLayer ? null : i);
          }}
          onPointerOver={(e) => {
            document.body.style.cursor = 'pointer';
            // Effet de surbrillance au survol
            e.object.traverse((child) => {
              if (child.isMesh && i !== selectedLayer) {
                child.material.color.set(0xe6e6e6);
              }
            });
          }}
          onPointerOut={(e) => {
            document.body.style.cursor = 'default';
            // Retour à la couleur normale
            e.object.traverse((child) => {
              if (child.isMesh && i !== selectedLayer) {
                child.material.color.set(0xcccccc);
              }
            });
          }}
        />
      );
    }
    return <>{layers}</>;
  }

  // Return normal pour les autres sections
  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      position={[0, 0, 0]}
    />
  );
}

const ModelKite = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="canvas-container">
      <Canvas 
        camera={{ 
          position: [0, 0, window.innerWidth <= 768 ? 15 : 10], 
          fov: window.innerWidth <= 768 ? 85 : 75 
        }}
        gl={{ 
          alpha: true,
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, window.devicePixelRatio]} // Optimisation pour les écrans haute résolution
        performance={{ min: 0.5 }} // Ajuste automatiquement la qualité
      >
        {/*<color attach="background" args={['white']} />*/}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={1} />
        
        <Environment preset="sunset" />
        
        <Suspense fallback={<Box />}>
          <Model 
            selectedLayer={selectedLayer} 
            setSelectedLayer={setSelectedLayer}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </Suspense>
        
        {/*<OrbitControls 
          enablePan={false}
          enableZoom={false}
        />*/}
      </Canvas>
      
      {selectedLayer !== null && currentSection === 3 && (
        <div className="layer-info-panel">
          <div className="layer-info-content">
            <h2>{layerTexts[selectedLayer].title}</h2>
            <p>{layerTexts[selectedLayer].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Composant Box pour le fallback
function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

// Définir les textes détaillés pour chaque couche
const layerTexts = [
  {
    title: "Planche de Paulownia",
    description: "La base de la planche est constituée d'un noyau de paulownia qui est l'un des bois les plus flexible du marché et offre un équilibre parfait entre légèreté et durabilité."
  },
  {
    title: "Fibre de Carbone",
    description: "La fibre de carbone est un renfort qui offre une résistance et une durabilité supérieures à la planche."
  },
  {
    title: "Fibre de Lin",
    description: "Similaire à la fibre de verre, le lin offre un renfort quasiment équivalent et plus durable."
  },
  {
    title: "Fibre de Lin",
    description: "Similaire à la fibre de verre, le lin offre un renfort quasiment équivalent et plus durable."
  },
  {
    title: "Fibre de Carbone",
    description: "La fibre de carbone est un renfort qui offre une résistance et une durabilité supérieures à la planche."
  },
  {
    title: "Fibre de Carbone",
    description: "La fibre de carbone est un renfort qui offre une résistance et une durabilité supérieures à la planche."
  }
];

export default ModelKite;
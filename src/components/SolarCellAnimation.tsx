//center the photon, scatter electron and hole...

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SolarCellAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  useEffect(() => {
    console.log('useEffect triggered');

    const solarCell = containerRef.current;
    if (!solarCell) {
      console.error('containerRef is null');
      return;
    }

    console.log('containerRef:', solarCell);

    // Clear previous content
    solarCell.innerHTML = '';

    // Create solar cell structure
    solarCell.classList.add(
      'relative',
      'w-full',
      'max-w-md',
      'h-96',
      'border-2',
      'border-gray-400',
      'rounded-lg',
      'overflow-hidden'
    );
    solarCell.style.backgroundImage = 'https://drive.google.com/file/d/17QV5LBGixq4AHvrRx5fTHdNRwvpjam2i/view?usp=drive_link';
    solarCell.style.backgroundSize = 'cover';
    solarCell.style.backgroundPosition = 'center';
    solarCell.style.backgroundRepeat = 'no-repeat';

    // Add p-n junction
    const pnJunction = document.createElement('div');
    pnJunction.classList.add(
      'absolute',
      'top-1/2',
      'left-0',
      'w-full',
      'h-1', 
      'bg-black',
      '-translate-y-1/2'
    );
    solarCell.appendChild(pnJunction);

    // Add electric field
    const electricField = document.createElement('div');
    electricField.classList.add(
      'absolute',
      'top-[40%]',
      'left-[10%]',
      'w-[80%]',
      'h-[20%]',
      'bg-gradient-to-r',
      'from-blue-200',
      'to-red-200',
      'border-dashed',
      'border-black',
      'opacity-80'
    );
    solarCell.appendChild(electricField);

    // Start animation when isAnimating becomes true
    if (isAnimating) {
      for (let i = 0; i < 5; i++) {
        createPhoton(solarCell, i);
      }
    }
  }, [isAnimating]); // Re-run effect when isAnimating changes

  function createPhoton(solarCell: HTMLElement, index: number) {
    const photon = document.createElement('div');
    photon.classList.add(
      'absolute',
      'w-2',
      'h-2',
      'bg-yellow-400', // Yellow color for photon
      'rounded-full'
    );
    photon.style.top = '-10px';
    photon.style.left = `${Math.random() * 100}%`;
    solarCell.appendChild(photon);
    console.log(`Photon ${index} created:`, photon);

    // Animate photon falling into the solar cell
    gsap.to(photon, {
      duration: 2,
      top: '50%',
      ease: 'linear',
      repeat: 0, // No looping for now
      delay: index * 0.4, // Staggered start
      onStart: () => console.log(`Photon ${index} animation started`),
      onComplete: () => {
        console.log(`Photon ${index} animation completed`);
        generateElectronHolePair(photon, solarCell);
      },
    });
  }

  function generateElectronHolePair(photon: HTMLElement, solarCell: HTMLElement) {
    console.log('Photon absorbed, generating electron-hole pair');

    // Remove photon after absorption
    photon.remove();
    console.log('Photon removed:', photon);

    // Create electron
    const electron = document.createElement('div');
    electron.classList.add(
      'absolute',
      'w-2',
      'h-2',
      'bg-red-500', // Red color for electron
      'rounded-full'
    );
    const electronTop = Math.random() * 40 + 30; // Random top position between 30% and 70%
    const electronLeft = Math.random() * 30 + 10; // Random left position between 10% and 40%
    electron.style.top = `${electronTop}%`;
    electron.style.left = `${electronLeft}%`;
    solarCell.appendChild(electron);
    console.log('Electron created:', electron);

    // Create hole
    const hole = document.createElement('div');
    hole.classList.add(
      'absolute',
      'w-2',
      'h-2',
      'bg-blue-500', // Blue color for hole
      'rounded-full'
    );
    const holeTop = Math.random() * 40 + 30; // Random top position between 30% and 70%
    const holeLeft = Math.random() * 30 + 60; // Random left position between 60% and 90%
    hole.style.top = `${holeTop}%`;
    hole.style.left = `${holeLeft}%`;
    solarCell.appendChild(hole);
    console.log('Hole created:', hole);

    // Animate electron and hole movement due to electric field
    gsap.to(electron, {
      duration: 1.5,
      top: '80%',
      ease: 'power1.inOut',
    });

    gsap.to(hole, {
      duration: 1.5,
      top: '20%',
      ease: 'power1.inOut',
    });
    
    
  }

  return (
    <>
      {/* Buttons at the top */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setIsAnimating(true)}
          disabled={isAnimating}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isAnimating ? 'Animating...' : 'Start'}
        </button>

        <button
          onClick={() => {
            setIsAnimating(false);
            if (containerRef.current) containerRef.current.innerHTML = '';
          }}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
        >
          Reset
        </button>
      </div>

      {/* Solar cell container */}
      <div ref={containerRef} className="flex justify-center mb-4"></div>

       {/* Legend at the bottom */}
       <div className="flex justify-center">
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
          <p className="text-sm font-semibold text-gray-800 mb-2">Key:</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Photon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Hole</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Electron</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-black"></div>
              <span className="text-sm text-gray-700">p-n Junction</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SolarCellAnimation;
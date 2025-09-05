import React from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
  id?: string;
  particleCount?: number;
  className?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  id = "tsparticles",
  particleCount = 30,
  className = "absolute inset-0 h-screen"
}) => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const particleOptions = {
    fullScreen: false,
    particles: {
      number: { value: particleCount, density: { enable: true, value_area: 1000 } },
      color: { value: "#676767" },
      opacity: { value: 0.3, random: true, anim: { enable: true, speed: 0.5 } },
      size: { value: 3, random: true, anim: { enable: true, speed: 2 } },
      move: {
        enable: true,
        direction: "none",
        outMode: "bounce",
        speed: 0.8,
        random: true,
        straight: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#676767",
        opacity: 0.2,
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 3 }
      }
    }
  };

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={particleOptions}
      className={className}
    />
  );
};

export default ParticlesBackground;

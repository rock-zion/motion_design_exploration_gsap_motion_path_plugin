import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {}, { scope: containerRef, dependencies: [] });

  return <section ref={containerRef}></section>;
};

export default Hero;

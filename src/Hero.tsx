import Ellipse from './assets/Ellipse_184_path.svg?react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { MotionPathPlugin } from 'gsap/all';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(MotionPathPlugin);
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.card');

      const centerIndex = (cards.length - 1) / 2;
      const peakProgress = 0.5;
      const spacing = 0.2;

      cards.forEach((card, index) => {
        const offsetFromCenter = index - centerIndex;
        const progress = peakProgress + offsetFromCenter * spacing;

        gsap.set(card, {
          motionPath: {
            path: '.path',
            align: '.path',
            alignOrigin: [0.5, 0.8],
            autoRotate: true,
            start: progress,
            end: progress,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section
      ref={containerRef}
      className='w-screen h-screen bg-amber-400 relative overflow-hidden'>
      <div className='w-screen h-1/2 absolute bottom-0 bg-fuchsia-100 overflow-hidden'>
        <Ellipse
          style={{
            width: '100%',
          }}
          className='absolute apsect-[3481/1740.5] top-[50%] svg-path'
        />
      </div>

      <div className='cards-container absolute rounded-full bg-red-500 w-fit bottom-0 left-[50%] -translate-x-1/2'>
        {new Array(5).fill('').map((_, index) => (
          <div
            className='bg-black text-white card absolute aspect-[12/16] rounded-2xl flex justify-center items-center'
            style={{
              height: 'clamp(270px, 54vh, 540px)',
              width: 'clamp(202.5px, 40.5vh, 405px)',
            }}
            key={index}>
            <div> {index}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

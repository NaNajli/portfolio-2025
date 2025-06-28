'use client'

import { useEffect, useRef } from 'react';

const techs = [
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'HTML', icon: '/html.svg' },
  { name: 'Node.js', icon: '/node.svg' },
  { name: 'Python', icon: '/python.svg' },
  { name: 'C#', icon: '/csharp.svg' },
  { name: 'MongoDB', icon: '/mongo.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'SQL', icon: '/sql.svg' }
];

export default function TechSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 1; 
    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
    }, 40); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <p className='text-2xl antialiased uppercase text-center p-2 text-[#6c584c]'>Habilidades</p>
      <div
        ref={containerRef}
        className="flex space-x-6 px-4 py-6 whitespace-nowrap overflow-x-scroll scrollbar-hide"
      >
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="shrink-0 w-40 h-40 flex flex-col items-center justify-center"
          > 
            <img src={tech.icon} alt={tech.name} className="h-12 mb-2" />
            <p className="text-sm font-semibold text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

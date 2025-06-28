'use client'

import { useEffect, useRef } from 'react';

const techs = [
  { name: 'JavaScript', icon: '/clouds.svg' },
  { name: 'HTML', icon: '/clouds.svg' },
  { name: 'Node.js', icon: '/clouds.svg' },
  { name: 'Python', icon: '/clouds.svg' },
  { name: 'C#', icon: '/clouds.svg' },
  { name: 'MongoDB', icon: '/clouds.svg' },
  { name: 'Next.js', icon: '/clouds.svg' },
  { name: 'Tailwind CSS', icon: '/clouds.svg' },
  { name: 'CSS', icon: '/clouds.svg' },
  { name: 'SQL', icon: '/clouds.svg' }
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
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex space-x-6 px-4 py-6 whitespace-nowrap overflow-x-scroll scrollbar-hide"
      >
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="shrink-0 w-20 h-20 flex flex-col items-center justify-center"
          >
            <img src={tech.icon} alt={tech.name} className="h-12 mb-2" />
            <p className="text-sm font-semibold text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

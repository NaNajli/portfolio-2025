'use client'
import NavItem from "./nav-items";
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navigation () {

   
const links = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id:2,
    label: 'Sobre mi',
    href: '/about'
  },
  {
    id:3,
    label:'Educación',
    href:`/education`
  },
  {
    id:4,
    label:'Contacto',
    href:`/contact`
  },
  {
    id: 5,
    label: 'Proyectos',
    href: 'projects',
  },
]; 

 const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
      setIsOpen(!isOpen);
  };


   return (
     <nav className="w-full p-3 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <Image className='w-25 rounded-full shadow-xl/30 md:w-35 justify-self-start ' src="/logo.jpg" alt="Profile" width={500} height={500} />
        {/* <Image className='w-25 md:w-35 justify-self-start ' src="/logo.jpg" alt="Profile" width={500} height={500} /> */}
        <button onClick={handleClick} className="md:hidden text-2xl"> ☰ </button>
      </div>
      <ul className={`flex flex-col md:flex-row md:items-center ${ isOpen ? 'block' : 'hidden md:flex' }`}> 
         <span className="flex flex-col md:flex-row text-center  md:justify-end  w-full gap-6 md:gap-10 md:pr-5">
         {links.map(({ id ,label, href}) => {
           return <NavItem  key={id} label={label} href={href} />;
        })}
       </span>  
      </ul>
    </nav>
  )
};

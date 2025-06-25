import NavItem from "./nav-items";
import Image from 'next/image';

export default async function Navigation () {

   
const links = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id:2,
    label: 'Sobre mi',
    href: '/about/page'
  },
  {
    id:3,
    label:'Educacion',
    href:`/education/page`
  },
  {
    id:4,
    label:'Contacto',
    href:`/contact/page`
  },
  {
    id: 5,
    label: 'Proyectos',
    href: '/projects/page',
  },
]; 

   return (
   <>
    <nav  className="lg:w-full p-4 ">
    <ul className="flex flex-col md:flex-row md:items-center justify-between w-full">
      <li><Image className='w-15 rounded-full shadow-xl/30 md:w-30 justify-self-start items-center' src="/logo.jpg" alt="Profile" width={500} height={500} /></li>
       <span className="flex flex-col md:flex-row md:space-x-6 md:items-end items-center md:mr-6">
        {links.map(({ id ,label, href}) => {
          return <NavItem  key={id} label={label} href={href} />;
        })}
        </span>  
      </ul>
    </nav>
    </>

    
  );
};

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
    href: '/pages/about'
  },
  {
    id:3,
    label:'Educacion',
    href:`/pages/education`
  },
  {
    id:4,
    label:'Contacto',
    href:`/pages/contact`
  },
  {
    id: 5,
    label: 'Proyectos',
    href: 'pages/projects',
  },
]; 

  return (
    <nav >
      <Image className='w-30 rounded-full shadow-xl/30' src="/logo.jpg" alt="Profile" width={500} height={500} />
      <ul className="flex flex-col ml-6 md:flex-row  md:ml-134">
        {links.map(({ id ,label, href}) => {
          return <NavItem  key={id} label={label} href={href} />;
        })}
        
      </ul>
    </nav>
  );
};

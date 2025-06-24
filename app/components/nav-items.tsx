import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
  <span > <li className= 'mr-6'>
      <Link href={href}>
        <i>{label}</i>
      </Link>
    </li>
    </span> 
   
  );
};

export default NavItem;
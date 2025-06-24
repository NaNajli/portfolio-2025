import Image from 'next/image';
import { Italiana } from "next/font/google";

const italiana = Italiana({
  variable: '--Static',
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <>
    <header>
    <h1 className={`${italiana.className} text-4xl sm:text-5xl pt:3 text-center md:text-6xl font-bold pt-34`}>
         Nadia Rodriguez
    </h1>
    <h2 className='text-center font-bold '>Desarrolladora Web</h2>   
    </header>
    </>
  )
};

export default Header;
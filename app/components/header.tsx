import { Italiana } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const italiana = Italiana({
  variable: '--Static',
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <>
    <header className= 'w-full min-h-screen md:min-h-[80vh] px-4 md:px-8 py-6 pt-30'>
    <h1 className={`${italiana.className} text-4xl sm:text-5xl pt:3 text-center md:text-6xl font-bold pt-34 mb-6`}>
         Nadia Rodriguez
    </h1>
    <h2 className='text-center font-bold '>Desarrollo Web</h2>   
    <div className="bg-[#ebddd7] p-30"></div>
      <Link href="/" className="fixed bottom-4 right-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"> <Image className='w-10 rounded-full center' src="/home.svg" alt="Profile" width={20} height={20}/></Link>
    </header>
    </>
  )
};

export default Header;
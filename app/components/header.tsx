import { Italiana } from "next/font/google";

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
    </header>
    </>
  )
};

export default Header;
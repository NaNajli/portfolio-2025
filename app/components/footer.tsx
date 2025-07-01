import Link from "next/link";
import Image from "next/image";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  variable: '--Static',
  subsets: ['latin'],
  weight: '400',
});


const Footer = () => {
  return <footer className="">
    <div className=" h-40 ">
    <h1 className={`${italiana.className} text-4xl sm:text-5xl text-center font-bold mt-10`}>Conectemos
    </h1>
    <div className="flex flex-row gap-5 justify-center m-9">
    <Link href="https://github.com/NaNajli" className=""> <Image className='' src="/github.svg" alt="Github" width={50} height={50}/></Link>
    <Link href="mailto:nadurodriguez2@gmail.com" className=""> <Image className='' src="/gmail.svg" alt="Gmail" width={50} height={50}/></Link>
    <Link href="https://www.linkedin.com/in/nadianajli/" className=""> <Image className='' src="/Linkedin.svg" alt="likedin" width={50} height={50}/></Link>
    </div>
    <p className="text-center">©2025 -Nadia Rodriguez-Argentina</p>
    </div>
    </footer>;
};

export default Footer;
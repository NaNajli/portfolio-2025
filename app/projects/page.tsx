import Link from "next/link"
import Image from "next/image"
import { Italiana } from "next/font/google";

const italiana = Italiana({
  variable: '--Static',
  subsets: ['latin'],
  weight: '400',
});


export default function Projects() {
  return (
  <>
    <h1 className="text-2xl antialiased uppercase text-center  text-[#432818] m-25 ">Proyectos</h1>
    <div className="flex flex-wrap justify-center gap-8 p-4 bg-white">  
    <div className="group w-[230px] md:w-[260px] transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-md p-6 ">
     <h2 className={`${italiana.className} text-4xl sm:text-3xl text-center font-extrabold tracking-tight drop-shadow-md m-3`}>Tienda Outdoor</h2>
    <Link href="https://sleepoutsideteam5.netlify.app/" className="bg-white "> <Image className='w-full h-auto cursor-pointer group-hover:opacity-90' src="/sleep.webp" alt="SleepOutside Pagina Web" width={1722} height={1501}/></Link>
    <p className="mt-2 text-sm ">Aplicación web dinámica desarrollada con HTML, CSS y JavaScript, la cual integra patrones de diseño, validaciones y operaciones CRUD con una base de datos relacional. Durante el proceso, aplicamos buenas prácticas de colaboración en equipo, resolución de problemas y gestión de entregas</p>
   </div>
   <div className="group w-[230px] md:w-[260px] transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-md p-6 ">
   <h2 className={`${italiana.className} text-4xl sm:text-3xl text-center font-extrabold tracking-tight drop-shadow-md m-3`}>Portfolio 2024</h2>
    <Link href="https://nanajli.github.io/portfolio2024/portfolio/index.html" className="bg-white m-23"> <Image className='w-full h-auto cursor-pointer group-hover:opacity-90' src="/portafolio2024.webp" alt="Portafolio 2024" width={690} height={665}/></Link>
    <p className="mt-2 text-sm ">Proyecto Personal: Aplicación construida con tecnologías web fundamentales (HTML, CSS, JavaScript). El despliegue público se realizó mediante GitHub Pages.</p> 
     </div>
    <div className="group w-[230px] md:w-[260px] transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-md p-6 ">
        <h2 className={`${italiana.className} text-4xl sm:text-3xl text-center font-extrabold tracking-tight drop-shadow-md m-3`}>Incubadora NOC</h2>
    <Link href="https://github.com/acostanoeliacba/IncubadoraBackend" className="bg-white"> <Image className='w-full h-auto cursor-pointer group-hover:opacity-90' src="/incubadora.webp" alt="Incubadora NOC" width={690} height={665}/></Link>
    <p className="mt-2 text-sm ">Desarrollamos una plataforma web para la Incubadora del NOC utilizando Angular, Node.js y MySQL, la cual está orientada a la gestión integral de cursos de capacitación. El sistema permite administrar inscripciones, asistencias, pagos, docentes y publicaciones institucionales. Mi rol principal fue como desarrolladora backend.</p>
    </div>
    <div className="group w-[230px] md:w-[260px] transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-md p-6 ">
    <h2 className={`${italiana.className} text-4xl sm:text-3xl text-center font-extrabold tracking-tight drop-shadow-md m-3`}>Concesionario ficticio</h2>
    <Link href="https://web-backend-zscp.onrender.com/" className='bg-white'> <Image className='' src="/pagecars.webp" alt="Concesionario de coches" width={1143} height={1210}/></Link>
     <p className="mt-2 text-sm">Durante siete semanas, desarrollé una página web dinámica utilizando el modelo MVC. Para el backend, utilicé Node.js en JavaScript, y la persistencia de datos se gestionó con PostgreSQL a través de PgAdmin. El proyecto fue versionado y desplegado utilizando GitHub y Render. Conté con el apoyo de un equipo de estudio para la resolución de desafíos técnicos.</p>
     </div>
   {/* <div className="group w-[230px] md:w-[260px] transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-md p-6 bg-white"> */}
   {/* <Link href="https://github.com/No-Country-simulation/c20-15-m-nest-react" className=''> <Image className='w-full h-auto cursor-pointer group-hover:opacity-90' src="/" alt="Incubadora NOC" width={690} height={665}/></Link> */}
   {/* <p className="mt-2 text-sm text-gray-700">Durante un sprint de cuatro semanas, participé activamente en el desarrollo de un MVP de banca digital, formando */}
    {/* parte de un equipo de 7 personas. Como desarrollador Front-end</p> */}
  {/* </div> */}
  </div>
   <Link href="/" className="fixed bottom-4 right-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"> <Image className='w-10 rounded-full center' src="/home.svg" alt="Profile" width={20} height={20}/></Link>
  
  
  </>
  )
}
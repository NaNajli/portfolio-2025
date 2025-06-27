import Image from 'next/image';

export default function About() {
  return (
    <>
<div className="relative text-black bg-white">
<div className="absolute inset-5 bg-[url('/clouds.svg')] bg-repeat bg-cover bg-center opacity-25 z-0"></div>
<div className="relative z-10">
<h1 className="text-2xl antialiased uppercase text-center md:text-left md:pl-45 md:pt-45 pt-20 "> Sobre mi</h1>
<div className="flex justify-center items-center min-h-screen px-4 relative ">
  <div className=" rounded-t-full border border-gray-400 w-full max-w-md h-[660px] md:h-[720px] p-10 bg-[#ebddd7]">
    <div className=" rounded-t-full border border-gray-400 w-full max-w-md h-[320px] md:h-[310px] p-10">
     <Image className='w-65 rounded-full center' src="/photo.jpeg" alt="Profile" width={800} height={800} />
    <p className="text-center md:mt-17 mt-30  md:text-lg ">
      Me considero una persona tenaz que ha logrado sus objetivos a través de dedicación y esfuerzo 
      Empece en el mundo de la programacion hace mas de tres años y cada día aumenta más mi interés en esta área
    </p>
  </div>
  </div>
</div>
<div className="flex justify-center items-center md:min-h-screen">
  <div className="bg-[#f5ebe0] rounded-b-full border border-gray-200 w-full max-w-md h-[300px] md:h-[280px] p-5">
    <p className="text-center mt-5 text-base sm:text-lg">  
  Estoy lista para sumarme a proyectos donde la curiosidad y la calidad se encuentren<br></br>
  Este portafolio no es un punto de llegada: es mi punto de partida hacia todo lo que quiero construir
    </p>
  </div>
</div>
</div>    
</div>
</>
  )
}
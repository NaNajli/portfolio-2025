import TechSlider from '../components/carousel'

export default function Education() {
  return (
  <>
<div className="min-h-screen px-4">
  <div>
    <h1 className='text-2xl antialiased uppercase text-center mt-20 mb-20 text-[#6c584c]'>Educación</h1>
    <ul className='text-xl text-center space-y-4'>
     <li >▪️Certificación en Desarrollo Web (2025) BYU</li>
     <li >▪️Licenciatura en Desarrollo de Software (2023 – presente) BYU-Pathway Worldwide – Brigham Young University – Idaho</li>
     <li >▪️Certificado en Programación Web e Informática (2024) BYU</li>
     <li >▪️Curso de Testing Manual Ágil con Herramientas (2023) Universidad Tecnológica Nacional (UTN)</li>  
    </ul>
  </div>
</div>
<TechSlider></TechSlider>

{/* <div className="bg-[url('/clouds.svg')] bg-center bg-repeat h-64 w-full"></div> */}

</>
  )
}
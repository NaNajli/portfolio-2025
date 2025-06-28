import TechSlider from '../components/carousel'

export default function Education() {
  return (
  <>
<div className="min-h-screen px-4 ">
  <div>
    <h1 className='text-2xl antialiased uppercase text-center mt-20 mb-20 text-[#6c584c]'>Educación</h1>
    <ul className='text-xl text-center space-y-4 mt-40'>
     <li >▪️Certificación en Desarrollo Web (2025) BYU</li>
     <li >▪️Licenciatura en Desarrollo de Software (2023 – presente) BYU-Pathway Worldwide – Brigham Young University – Idaho</li>
     <li >▪️Certificado en Programación Web e Informática (2024) BYU</li>
     <li >▪️Curso de Testing Manual Ágil con Herramientas (2023) Universidad Tecnológica Nacional (UTN)</li>  
    </ul>
  </div>
</div>
<a href="/" className="fixed bottom-4 right-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></a>
<TechSlider></TechSlider>
</>
  )
}
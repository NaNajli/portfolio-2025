import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  return (
  <>
  <h1>Proximamente Contacto...</h1>
    <Link href="/" className="fixed bottom-4 right-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"> <Image className='w-10 rounded-full center' src="/home.svg" alt="Profile" width={20} height={20}/></Link>
  </>
  )
}
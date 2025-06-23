import Image from 'next/image'

export default function Page() {
  return (
  <>
   <Image className='w-50' src="/logo.jpg" alt="Profile" width={500} height={500} />
   </>
  )
}
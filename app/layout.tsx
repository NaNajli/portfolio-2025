import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NR | Desarrollo Web',
  description: 'Portafolio Nadia Rodriguez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
      </body>
      
    </html>
  )
}
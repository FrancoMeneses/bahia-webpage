import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bahía Business Center',
  description: 'Una nueva forma de hacer negocios'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  )
}

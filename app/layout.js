import { Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/counter.css'

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
// const poppins = Poppins({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin']
// })

export const metadata = {
  title: 'Bahía Business Center',
  description: 'Una nueva forma de hacer negocios',
  openGraph: {
    images: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832513/Webpage/Sala%20de%20Capacitaci%C3%B3n/mgrzpscyuzlpdrkyf9zj.webp'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  )
}

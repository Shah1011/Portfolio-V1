import { Roboto_Mono } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const robo_mono = Roboto_Mono({ 
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-robomono' 
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '500'],
})

export const metadata = {
  title: 'Shah',
  description: 'Portfolio Website Built by Shah Abulkalam ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head><meta charSet="UTF-8"/></head>
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  )
}

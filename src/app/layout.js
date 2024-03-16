import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  visualViewport: 'width=device-width, initial-scale=1.0, user-scalable=no',
  title: 'Portfolio Website',
  description: 'Experienced Full Stack Developer with a passion for crafting innovative solutions. Proficient in both front-end and back-end technologies, I thrive in creating seamless user experiences while ensuring robust functionality. Dedicated to continuous learning and staying abreast of emerging trends, I bring creativity and expertise to every project I undertake.',
  keywords: 'portfolio, web development, front-end, back-end, front-end development',
  author: 'Mirnes Kovacevic',
  url: 'https://mirnes-dev.com',
  image: '/images/about-image.png',
  type: 'website',
  locale: 'en-US',
  theme: 'dark',
  ogLanguage: 'en_US',
  ogType: 'website',
  ogUrl: 'https://mirnes-dev.com',
  ogSiteName: 'Mirnes Kovacevic',
  ogTitle: 'Portfolio Website',
  ogDescription:  'Experienced Full Stack Developer with a passion for crafting innovative solutions. Proficient in both front-end and back-end technologies, I thrive in creating seamless user experiences while ensuring robust functionality. Dedicated to continuous learning and staying abreast of emerging trends, I bring creativity and expertise to every project I undertake.',
  ogImage: '/images/about-image.png',
  

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

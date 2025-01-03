import './globals.css';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Website',
  description:
    'Experienced Full Stack Developer with a passion for crafting innovative solutions. Proficient in both front-end and back-end technologies, I thrive in creating seamless user experiences while ensuring robust functionality. Dedicated to continuous learning and staying abreast of emerging trends, I bring creativity and expertise to every project I undertake.',
  keywords: 'portfolio, web development, front-end, back-end, front-end development',
  authors: [{ name: 'Mirnes Kovacevic' }],
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Portfolio Website',
    description:
      'Experienced Full Stack Developer with a passion for crafting innovative solutions. Proficient in both front-end and back-end technologies, I thrive in creating seamless user experiences while ensuring robust functionality. Dedicated to continuous learning and staying abreast of emerging trends, I bring creativity and expertise to every project I undertake.',
    url: 'https://mirnes-dev.com',
    siteName: 'Mirnes Kovacevic',
    images: [
      {
        url: '/images/about-image.png',
        width: 800,
        height: 600,
        alt: 'About Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// You can configure the viewport in the `viewport` export instead of `metadata`
export const viewport = 'width=device-width, initial-scale=1.0, user-scalable=no';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// PropTypes Validation
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

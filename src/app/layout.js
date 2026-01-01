import '@/app/globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.growagardenplayer.com'),
  title: {
    default: 'Grow a Garden Player',
  },
  description: 'Your ultimate resource for Grow a Garden guides, tips, and news.',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        { children }
      </body>
    </html>
  )
}

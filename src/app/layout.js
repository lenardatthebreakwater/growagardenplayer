import '@/app/globals.css'
import { Inter } from 'next/font/google';

// If you were using a font, you would define it here.
// Example using Google Fonts (recommended for performance):
const inter = Inter({ subsets: ['latin'] });


// The Root Layout is mandatory and defines the <html> and <body> tags.
// Any metadata defined here is inherited by all pages, but we'll stick to basic.
// We are exporting a default metadata object here, which is standard, 
// but the page-specific metadata in page.jsx will override the title/description.
export const metadata = {
  // Title and Description are better defined in page.jsx for SEO targeting
  // The siteName is still good to keep here for OpenGraph fallback.
  siteName: 'GardenHub', 
  icons: {
    icon: '/favicon.ico', // Make sure you have a favicon in the /public folder
  }
};


export default function RootLayout({ children }) {
  return (
    // The lang attribute is important for accessibility and SEO
    <html lang="en"> 
      {/* The <head> content (like title, meta tags, and JSON-LD) is automatically 
        managed by Next.js using the exported `metadata` object in page.jsx.
        We just need the <body> content here.
      */}
      <body className={inter.className}>
        { children }
      </body>
    </html>
  )
}

import '@/app/globals.css'

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Grow a Garden Player</title>
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}

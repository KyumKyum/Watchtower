import '../styles/global.css'
import 'animate.css'
import localFont from 'next/font/local'

//* Same with _app.js in previous Next.js

export const metadata = {
  title: 'Kyum\'s Watchtower',
  description: 'A small place to record my own life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
    <head>
        <base href={"http://localhost:3000/"}/>
      <title>{'Kyum\'s Watchtower'}</title>
    </head>
      <body>
        {children}
      </body>
    </html>
  )
}

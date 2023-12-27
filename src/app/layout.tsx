import '../styles/global.css'
import 'animate.css'
import localFont from 'next/font/local'
import Canvas from "@/layout/Canvas";

//* Same with _app.js in previous Next.js

export const metadata = {
  title: 'Kyum\'s Watchtower',
  description: 'A small place to record my own life.',
  icons: {
    icon: "../public/favicon/favicon.ico"
  }
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
      <link rel='icon' href='../public/favicon/favicon.ico'/>
    </head>
      <body>
        <Canvas>
          {children}
        </Canvas>
      </body>
    </html>
  )
}

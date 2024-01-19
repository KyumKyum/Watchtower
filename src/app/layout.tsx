import '../styles/global.css'
import 'animate.css'
import Canvas from "@/layout/Canvas";
import MobileDetect from "mobile-detect";
import {headers} from "next/headers";

//* Same with _app.js in previous Next.js

export const metadata = {
  title: 'Kyum\'s Watchtower',
  description: 'A small place to record my own life.',
  metadataBase: new URL('https://watchtower-sigma.vercel.app/'),
  icons: {
    icon: "/public/favicon/favicon.ico"
  },
  openGraph: {
    url: 'https://watchtower-sigma.vercel.app/',
    title: 'Kyum\'s Watchtower',
    description: 'A small place to record my own life.',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isSSRMobile = await checkSSRMobile();

  return (
    <html lang="ko">
    <head>
      <base href={process.env.NEXT_PUBLIC_HOST}/>
      <title>{metadata.title}</title>
      <link rel='icon' href='/favicon/favicon.ico'/>
    </head>
      <body>
        <Canvas isSSRMobile={isSSRMobile}>
          {children}
        </Canvas>
      </body>
    </html>
  )
}

const checkSSRMobile = async () => {
  // const md = new MobileDetect()
  const mobileInfo: string|undefined = headers().get("user-agent")?.toString()
  if(typeof mobileInfo === "undefined") return false

  const md = new MobileDetect(mobileInfo);

  return Boolean(md.mobile())
}

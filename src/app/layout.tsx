import '../styles/global.css'
import 'animate.css'
import Canvas from "@/layout/Canvas";
import MobileDetect from "mobile-detect";
import {headers} from "next/headers";
import {DefaultSeo} from "next-seo";

//* Same with _app.js in previous Next.js

export const metadata = {
  title: 'Kyum\'s Watchtower',
  description: 'A small place to record my own life.',
  icons: {
    icon: "/public/favicon/favicon.ico"
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
    <DefaultSeo
      title={metadata.title}
      description={metadata.description}
      canonical={'https://watchtower-sigma.vercel.app/'}
      openGraph={{
        url: 'https://watchtower-sigma.vercel.app/',
        title: metadata.title,
        description: metadata.description,
        site_name: metadata.title
      }}
    />
    <head>
      <base href={process.env.HOST}/>
      <title>{'Kyum\'s Watchtower'}</title>
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

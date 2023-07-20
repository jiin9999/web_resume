import "./reset.css"
import "./global.css"
import localFont from "next/font/local"

const globalFont = localFont({
  src: "/font/PretendardVariable.woff2",
})

export const metadata = {
  title: "프론트엔드 개발자 천지인 이력서",
  description: "프론트엔드 개발자 천지인 이력서입니다.",
  openGraph: {
    title: "프론트엔드 개발자 천지인 이력서",
    description: "프론트엔드 개발자 천지인의 이력서 웹사이트입니다.",
    url: "https://web-resume-mu.vercel.app/",
    siteName: "프론트엔드 개발자 천지인 이력서",
    images: [
      {
        url: "https://velog.velcdn.com/images/cji3604/post/f3a61b5a-d595-4fba-b0d0-7341c4d58279/image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://velog.velcdn.com/images/cji3604/post/f3a61b5a-d595-4fba-b0d0-7341c4d58279/image.jpg",
        width: 1800,
        height: 1600,
        alt: "웹사이트 이미지",
      },
    ],
    locale: "ko-KR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={globalFont.className}>
      <head>
        <meta property="og:image" content="/metaData/metaImage.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}

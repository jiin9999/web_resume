import "./reset.css"
import "./global.css"
import localFont from "next/font/local"

const globalFont = localFont({
  src: "/font/PretendardVariable.woff2",
})

export const metadata = {
  title: "프론트엔드 개발자 천지인 이력서",
  description: "프론트엔드 개발자 천지인 이력서입니다.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={globalFont.className}>
      <body>{children}</body>
    </html>
  )
}

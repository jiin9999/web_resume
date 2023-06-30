import Link from "next/link"
import { ImGithub, ImLink, ImHome } from "react-icons/im"

const icons = {
  github: <ImGithub />,
  blog: <ImHome />,
  link: <ImLink />,
}

interface LinkButtonProps {
  type: keyof typeof icons
  href: string
}

export default function LinkButton({ type, href }: LinkButtonProps) {
  const IconComponent = icons[type] || <ImLink /> // 링크 아이콘을 디폴트로 한다.

  return (
    <Link href={href} target="_blank">
      <button>{IconComponent}</button>
    </Link>
  )
}

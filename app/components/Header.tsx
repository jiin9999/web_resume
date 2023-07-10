import styles from "./css/Header.module.css"
import HeaderModeButton from "./HeaderModeButton"
import { FaReact } from "react-icons/fa"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.LogoContainer}>
        <FaReact />
        <h1 className={styles.title}>천지인 이력서</h1>
      </div>
      <HeaderModeButton />
    </header>
  )
}

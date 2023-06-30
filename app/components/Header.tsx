import styles from "./css/Header.module.css"
import HeaderModeButton from "./HeaderModeButton"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>천지인 이력서</h1>
      {/* <HeaderModeButton /> */}
    </header>
  )
}

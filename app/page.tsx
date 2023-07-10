import styles from "./page.module.css"

import Header from "./components/Header"
import Introduce from "./components/Introduce"
import Project from "./components/Project"
import CoverLetter from "./components/CoverLetter"
import Education from "./components/Education"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <Introduce />
      <Project />
      <CoverLetter />
      <Education />
    </main>
  )
}

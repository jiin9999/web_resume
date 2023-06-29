import styles from "./page.module.css"

import Introduce from "./components/Introduce"
import Project from "./components/Project"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Introduce />
      {/* <Project /> */}
    </main>
  )
}

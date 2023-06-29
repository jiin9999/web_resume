"use client"

import { useEffect, useState } from "react"
import styles from "./css/HeaderModeButton.module.css"

export default function HeaderModeButton() {
  const [theme, setTheme] = useState<string>()

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    setTheme(localTheme || "light")
  }, [])

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem("theme", theme)
      document.body.setAttribute("data-theme", theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <button
      className={`${styles.toggleButton} ${
        theme === "dark" ? styles.darkMode : ""
      }`}
      onClick={toggleTheme}
    >
      <div className={styles.toggleBackground}>
        <span className={styles.toggleCircle}></span>
      </div>
    </button>
  )
}

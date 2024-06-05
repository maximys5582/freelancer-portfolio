import React, { useEffect, useState } from "react"
import { getImageByKey } from "../../getImageByKey"

const DarkModeBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <button
      onClick={toggleDarkMode}
      className={
        isDarkMode ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn"
      }
    >
      <div className="dark-mode-btn__icon">{getImageByKey("sun")}</div>
      <div className="dark-mode-btn__icon">{getImageByKey("moon")}</div>
    </button>
  )
}

export default DarkModeBtn

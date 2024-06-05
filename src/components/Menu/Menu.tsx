import { Link } from "react-router-dom"
import "./Menu.scss"
import { useEffect, useState } from "react"
import DarkModeBtn from "./DarkModeBtn"

const Menu = () => {
  const [activeItemMenu, setActiveItemMenu] = useState(() => {
    return localStorage.getItem("activeItemMenu") || ""
  })

  useEffect(() => {
    const savedActiveItemMenu = localStorage.getItem("activeItemMenu")
    if (savedActiveItemMenu) {
      setActiveItemMenu(savedActiveItemMenu)
    }
  }, [])

  const handleClick = (item: string) => {
    setActiveItemMenu(item)
    localStorage.setItem("activeItemMenu", item)
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav_row">
          <Link className="logo" to="/" onClick={() => handleClick("projects")}>
            <strong>Freelancer</strong> portfolio
          </Link>

          <DarkModeBtn />

          <ul className="nav_list">
            <Link
              to="/"
              className={
                activeItemMenu === "projects"
                  ? "nav_list__link nav_list__link--active"
                  : "nav_list__link"
              }
              onClick={() => handleClick("projects")}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={
                activeItemMenu === "skills"
                  ? "nav_list__link nav_list__link--active"
                  : "nav_list__link"
              }
              onClick={() => handleClick("skills")}
            >
              Skills
            </Link>
            <Link
              to="/contacts"
              className={
                activeItemMenu === "contacts"
                  ? "nav_list__link nav_list__link--active"
                  : "nav_list__link"
              }
              onClick={() => handleClick("contacts")}
            >
              Contacts
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu

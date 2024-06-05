import { Route, Routes } from "react-router-dom"
import Projects from "./pages/Projects/Projects"
import Skills from "./pages/Skills/Skills"
import Contacts from "./pages/Contacts/Contacts"
import Menu from "./components/Menu/Menu"
import "./nullStyle.scss"
import Footer from "./components/Footer"
import ProjectDetails from "./pages/ProjectDetails"
import ScrollToTop from "./utils/scrollToTop"

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path={"/"} element={<Projects />} />
        <Route path={"/skills"} element={<Skills />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"/project/:id"} element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

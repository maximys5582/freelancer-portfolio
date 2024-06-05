import React from "react"
import "./Projects.scss"
import Project from "../../components/Projects/Project"

const Projects = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapepr">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Max</em>
            </strong>
            <br />a frontend developer
          </h1>

          <div className="header__text">
            <p>with passion frin learning and creating</p>
          </div>

          <button type="submit" className="btn">
            Downland CV
          </button>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h2 className="title-1">Project</h2>

          <ul className="projects">
            <Project />
          </ul>
        </div>
      </main>
    </>
  )
}

export default Projects

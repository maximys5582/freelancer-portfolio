import React from "react"
import { projects } from "../../helpers/projectList"
import { NavLink } from "react-router-dom"

const Project: React.FC = () => {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <NavLink to={"/project/" + index}>
            <li className="project" key={index}>
              <img
                src={project.img}
                alt="Project image"
                className="project__img"
              />

              <h3 className="project__title">{project.title}</h3>
            </li>
          </NavLink>
        )
      })}
    </>
  )
}

export default Project

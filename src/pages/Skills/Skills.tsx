import React from "react"
import "./Skills.scss"

const Skills = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title-1">Skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, Yarn,
                StyledComponents
              </p>
            </li>
            {/* <li className="content-list__item"></li> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills

import { useParams } from "react-router-dom"
import { getImageByKey } from "../getImageByKey"
import { projects } from "../helpers/projectList"

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects[id]

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <div className="project-details__cover">
            <img src={project.img} alt="" />
          </div>

          <div className="project-datails__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <a href={project.gitHubLink} className="btn-outline">
            {getImageByKey("gitHubBlack")}
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails

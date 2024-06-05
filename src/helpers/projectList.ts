import { getImageByKey } from "../getImageByKey"

interface Project {
  // id: number
  title: string
  skills: string
  img: string
  gitHubLink: string
}

const projects: Project[] = [
  {
    title: "CRM customers",
    skills: "",
    img: getImageByKey("CRM"),
    gitHubLink: "https://github.com/maximys5582",
  },
  {
    title: "Falafel verifies",
    skills: "",
    img: getImageByKey("Falafel"),
    gitHubLink: "https://github.com/maximys5582",
  },
  {
    title: "Falafel verifies",
    skills: "",
    img: getImageByKey("Falafel"),
    gitHubLink: "https://github.com/maximys5582",
  },
  {
    title: "Falafel verifies",
    skills: "",
    img: getImageByKey("Falafel"),
    gitHubLink: "https://github.com/maximys5582",
  },
  {
    title: "Falafel verifies",
    skills: "",
    img: getImageByKey("Falafel"),
    gitHubLink: "https://github.com/maximys5582",
  },
  {
    title: "Falafel verifies",
    skills: "",
    img: getImageByKey("Falafel"),
    gitHubLink: "https://github.com/maximys5582",
  },
]

export { projects }

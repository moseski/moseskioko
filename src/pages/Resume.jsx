import { motion } from "framer-motion"
import "./Projects.css"

const projects = [
  {
    title: "AI-Powered Personal Assistant",
    description:
      "Developed a smart personal assistant using natural language processing and machine learning algorithms to help users manage their daily tasks and schedules.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    link: "https://github.com/moseskioko/ai-assistant",
  },
  {
    title: "E-commerce Platform",
    description:
      "Built a full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "https://github.com/moseskioko/ecommerce-platform",
  },
  {
    title: "Climate Change Visualization Tool",
    description:
      "Created an interactive data visualization tool to help people understand the impacts of climate change using real-time data from various sources.",
    technologies: ["D3.js", "React", "Node.js", "Python (data processing)"],
    link: "https://github.com/moseskioko/climate-viz",
  },
]

const Resume = () => {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-content">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
          My Resume
        </motion.h1>
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Resume


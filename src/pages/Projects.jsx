import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import "./Projects.css"

const projects = [
  {
    title: "AI-Powered Personal Assistant",
    description:
      "Developed a smart personal assistant using natural language processing and machine learning algorithms to help users manage their daily tasks and schedules.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    link: "https://github.com/moseskioko/ai-assistant",
    image: "/placeholder.svg?height=300&width=500",
    demoLink: "https://ai-assistant-demo.vercel.app",
    details:
      "This AI-powered personal assistant leverages advanced NLP techniques to understand and respond to user queries. It integrates with various APIs to provide real-time information on weather, news, and more. The assistant can also manage calendars, set reminders, and learn from user interactions to provide increasingly personalized assistance over time.",
  },
  {
    title: "E-commerce Platform",
    description:
      "Built a full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "https://github.com/moseskioko/ecommerce-platform",
    image: "/placeholder.svg?height=300&width=500",
    demoLink: "https://ecommerce-platform-demo.vercel.app",
    details:
      "This e-commerce platform offers a seamless shopping experience with features such as real-time inventory management, user reviews and ratings, and personalized product recommendations. The backend uses GraphQL for efficient data fetching, and the Stripe API ensures secure payment processing. The platform also includes an admin dashboard for easy product and order management.",
  },
  {
    title: "Climate Change Visualization Tool",
    description:
      "Created an interactive data visualization tool to help people understand the impacts of climate change using real-time data from various sources.",
    technologies: ["D3.js", "React", "Node.js", "Python (data processing)"],
    link: "https://github.com/moseskioko/climate-viz",
    image: "/placeholder.svg?height=300&width=500",
    demoLink: "https://climate-viz-demo.vercel.app",
    details:
      "This visualization tool combines data from multiple climate research institutions to create compelling, interactive graphics that illustrate the effects of climate change. Users can explore historical trends, future projections, and the impact of various factors on global climate patterns. The tool also includes educational resources and actionable steps to combat climate change.",
  },
]

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null)

  const toggleProjectDetails = (index) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

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
          My Projects
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
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  <motion.button
                    className="project-button"
                    onClick={() => toggleProjectDetails(index)}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedProject === index ? (
                      <>
                        View Less <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        View More <ChevronDown size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      className="project-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{project.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="view-more" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <motion.a
            href="https://github.com/moseskioko"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-button"
            whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects




// import { motion } from "framer-motion"
// import "./Projects.css"

// const projects = [
//   {
//     title: "AI-Powered Personal Assistant",
//     description:
//       "Developed a smart personal assistant using natural language processing and machine learning algorithms to help users manage their daily tasks and schedules.",
//     technologies: ["Python", "TensorFlow", "Flask", "React"],
//     link: "https://github.com/moseskioko/ai-assistant",
//   },
//   {
//     title: "E-commerce Platform",
//     description:
//       "Built a full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and payment integration.",
//     technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
//     link: "https://github.com/moseskioko/ecommerce-platform",
//   },
//   {
//     title: "Climate Change Visualization Tool",
//     description:
//       "Created an interactive data visualization tool to help people understand the impacts of climate change using real-time data from various sources.",
//     technologies: ["D3.js", "React", "Node.js", "Python (data processing)"],
//     link: "https://github.com/moseskioko/climate-viz",
//   },
// ]

// const Projects = () => {
//   return (
//     <motion.div
//       className="projects"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="projects-content">
//         <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
//           My Projects
//         </motion.h1>
//         <motion.div
//           className="projects-grid"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="project-card"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 * (index + 1) }}
//             >
//               <h2>{project.title}</h2>
//               <p>{project.description}</p>
//               <div className="technologies">
//                 {project.technologies.map((tech, i) => (
//                   <span key={i} className="tech-tag">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
//                 View Project
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }

// export default Projects


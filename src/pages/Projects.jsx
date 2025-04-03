"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import "./Projects.css"

const projects = [
  {
    title: "E-Health Management System",
    description:
      "Developed a comprehensive healthcare management system to streamline patient care, medical records, and hospital administration processes.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "https://github.com/moseskioko/e-health-system",
    image: "/images/projects/e-health.png",
    demoLink: "https://e-health-demo.vercel.app",
    details:
      "This E-Health Management System provides a unified platform for healthcare providers to manage patient records, appointments, prescriptions, and billing. The system features real-time notifications for critical updates, secure patient data storage compliant with healthcare regulations, and an intuitive dashboard for healthcare professionals to monitor patient progress and treatment plans.",
  },
  {
    title: "Smart Agricultural Marketplace",
    description:
      "Created a platform connecting farmers and buyers with predictive market analysis for agricultural products based on supply and demand trends.",
    technologies: ["Django", "React.js", "PostgreSQL", "TensorFlow", "Chart.js"],
    link: "https://github.com/moseskioko/agri-marketplace",
    image: "/images/projects/agri-marketplace.png",
    demoLink: "https://agri-marketplace-demo.vercel.app",
    details:
      "The Smart Agricultural Marketplace is designed to empower farmers with data-driven insights and direct market access. The platform features predictive pricing models for various crops, supply chain tracking, weather forecasting integration, and a direct communication channel between farmers and buyers. Machine learning algorithms analyze historical data to provide accurate price forecasts, helping farmers make informed decisions about planting and harvesting.",
  },
  {
    title: "Anomaly Detection Analysis Dashboard",
    description:
      "Built an interactive dashboard for detecting and visualizing anomalies in network traffic and system behavior for enhanced cybersecurity monitoring.",
    technologies: ["Python", "Flask", "React", "D3.js", "TensorFlow", "Scikit-learn"],
    link: "https://github.com/moseskioko/anomaly-detection",
    image: "/images/projects/cybersec.png",
    demoLink: "https://anomaly-detection-demo.vercel.app",
    details:
      "This Anomaly Detection Analysis Dashboard provides real-time monitoring and visualization of network and system anomalies. The system employs advanced machine learning algorithms to identify unusual patterns that may indicate security breaches or system failures. Features include customizable alert thresholds, historical trend analysis, automated incident response recommendations, and comprehensive reporting tools for security teams.",
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


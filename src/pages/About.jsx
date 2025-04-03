import { motion } from "framer-motion"
import "./About.css"

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
          About Me
        </motion.h1>
        <motion.div
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p>
          Hello! I'm Moses Kioko, a fourth-year Software Engineering student at Murang'a University of Technology and a 
          passionate Full Stack Developer with a strong enthusiasm for AI, Machine Learning, and Data Science.
          With a keen interest in emerging technologies, I strive to create innovative solutions that make a positive 
          impact on the world.
          </p>
          <p>
          My journey in tech began in 2021 at Murang'a University of Technology, where I am currently pursuing my 
          Bachelor's degree in Software Engineering. Throughout my studies, I have been continuously expanding my 
          skills and knowledge, staying up-to-date with the latest trends and best practices in software development.
          </p>
          <p>I specialize in:</p>
          <ul>
            <li>Full Stack Web Development (React, Node.js, Express, MongoDB)</li>
            <li>Mobile App Development (React Native, Flutter)</li>
            <li>Machine Learning and AI (TensorFlow, PyTorch)</li>
            <li>Cloud Computing (AWS, Google Cloud Platform)</li>
            <li>DevOps and CI/CD pipelines</li>
          </ul>
          <p>
            When I'm not coding, you can find me exploring new hiking trails, reading about the latest tech innovations,
            or volunteering at local STEM education initiatives. I'm always excited to take on new challenges and
            collaborate on projects that push the boundaries of what's possible with technology.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About


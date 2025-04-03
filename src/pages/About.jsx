"use client"

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
            I am a passionate software engineer with a keen interest in solving complex problems through technology.
            Over the past two years, I have dedicated myself to building a diverse portfolio of full-stack projects,
            demonstrating my skills in front-end and back-end development, data analysis, and system optimization.
          </p>

          <h2>Technical Expertise</h2>
          <p>
            My journey in software engineering has equipped me with a strong foundation in both front-end and back-end
            development:
          </p>

          <ul>
            <li>
              <strong>Front-End Development</strong> – I specialize in creating engaging and responsive user interfaces
              using HTML, CSS, JavaScript, and modern libraries/frameworks like React.js and Tailwind CSS.
            </li>
            <li>
              <strong>Back-End Development</strong> – I have honed my skills in Python, developing efficient and
              scalable server-side applications. My expertise extends to database management with MySQL, PostgreSQL, and
              MongoDB, ensuring data integrity and seamless integration across different system components.
            </li>
            <li>
              <strong>Data Science & Analytics</strong> – I am passionate about data analysis and visualization,
              leveraging tools like Power BI, Excel, and Python to extract insights and drive data-driven
              decision-making.
            </li>
          </ul>

          <h2>Educational Pursuits</h2>
          <p>
            I am currently pursuing a Bachelor of Science in Software Engineering at Murang'a University of Technology
            in Kenya, with an expected graduation in August 2025. My academic journey has not only sharpened my
            technical skills but has also instilled in me a problem-solving mindset, strong teamwork abilities, and a
            deep appreciation for innovation.
          </p>

          <h2>Future Goals</h2>
          <p>
            As I advance in my career, my goal is to secure an internship where I can apply my knowledge in a hands-on
            environment, learn from experienced professionals, and contribute meaningfully to real-world projects. I am
            eager to explore cutting-edge software engineering practices, collaborate with teams, and stay ahead of
            industry trends.
          </p>

          <h2>Let's Connect!</h2>
          <p>
            If you're looking for a motivated and adaptable software engineer who is passionate about building impactful
            solutions, let's connect! I'd love to explore opportunities where my skills and enthusiasm can contribute to
            your team's success.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About


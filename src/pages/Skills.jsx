import { motion } from "framer-motion"
import "./Skills.css"
import { Code, Server, Database, Cloud, Brain } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud Platform", "CI/CD", "Git"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision"],
  },
]

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          Skills
        </motion.h1>
        <motion.div
          className="skills-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <div className="skill-header">
                <h2>{category.category}</h2>
                <div className="rotation">
                  <category.icon size={24} />
                </div>
              </div>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * (skillIndex + 1) }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills


"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import "./Awards.css"

const awards = [
  {
    title: "First Runners-Up: AI in Cybersecurity",
    organization: "Interuniversity Hackathon",
    year: 2024,
    description:
      "Recognized for developing an innovative anomaly detection system with self-healing and vaccination capabilities for enhanced cybersecurity protection.",
    image: "/images/awards/hackathon-2024.jpeg",
    icon: Trophy,
  },
]

const Awards = () => {
  return (
    <motion.div
      className="awards"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="awards-content">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
          Awards & Recognitions
        </motion.h1>
        <motion.div
          className="awards-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="award-item"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <div className="award-content">
                <div className="award-text">
                  <h2>{award.title}</h2>
                  <h3>
                    {award.organization} - {award.year}
                  </h3>
                  <p>{award.description}</p>
                </div>
                <motion.div
                  className="award-image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={award.image || "/placeholder.svg"} alt={award.title} className="award-image" />
                  <div className="award-overlay">
                    <motion.div
                      className="award-icon"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Trophy size={40} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Awards


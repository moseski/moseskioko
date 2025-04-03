"use client"

import { motion } from "framer-motion"
import "./Home.css"

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="background-image" />
      <div className="home-container">
        <motion.div
          className="profile-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="profile-image-container">
            <img src="/images/profile/profile-photo.jpeg" alt="Moses Kioko" className="profile-image" />
          </div>
        </motion.div>
        <motion.div className="content-section">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Hello, I'm Moses Kioko!
          </motion.h1>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          >
            Full Stack Developer, Software Engineer & AI Enthusiast
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            Passionate about creating innovative solutions and pushing the boundaries of technology.
          </motion.p>
          <motion.div
            className="button-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="cta-button secondary"
              whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home


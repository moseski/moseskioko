"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Awards from "./pages/Awards"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import "./App.css"

// Animated section wrapper component
const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id={id} className="section-wrapper" ref={ref}>
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div")
      star.className = "star"
      star.style.left = `${Math.random() * 100}vw`
      star.style.top = `${Math.random() * 100}vh`
      star.style.animationDuration = `${Math.random() * 3 + 2}s`
      document.body.appendChild(star)

      setTimeout(() => {
        star.remove()
      }, 5000)
    }

    const starInterval = setInterval(createStar, 200)

    return () => clearInterval(starInterval)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="scroll-container" ref={containerRef}>
        <AnimatedSection id="home">
          <Home />
        </AnimatedSection>
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="awards">
          <Awards />
        </AnimatedSection>
        <AnimatedSection id="resume">
          <Resume />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  )
}

export default App


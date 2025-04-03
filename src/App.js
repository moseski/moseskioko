import { useRef, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Awards from "./pages/Awards"
import Contact from "./pages/Contact"
import "./App.css"

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
        <section id="home" className="section-wrapper">
          <Home />
        </section>
        <section id="about" className="section-wrapper">
          <About />
        </section>
        <section id="skills" className="section-wrapper">
          <Skills />
        </section>
        <section id="projects" className="section-wrapper">
          <Projects />
        </section>
        <section id="awards" className="section-wrapper">
          <Awards />
        </section>
        <section id="resume" className="section-wrapper">
          <Resume />
        </section>
        <section id="contact" className="section-wrapper">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App


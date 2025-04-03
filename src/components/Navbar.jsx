"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      {isMobile ? (
        <motion.div
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.div>
      ) : null}
      <motion.ul
        className={`navbar-links ${isOpen ? "open" : ""} ${isMobile ? "mobile" : ""}`}
        initial={false}
        animate={isMobile && isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: isMobile ? 0 : 1, x: isMobile ? "100%" : 0 },
        }}
      >
        {["home", "about", "skills", "projects", "awards", "resume", "contact"].map((item) => (
          <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={() => scrollTo(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default Navbar


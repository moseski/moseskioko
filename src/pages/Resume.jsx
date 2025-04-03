"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Code, Languages, Award } from "lucide-react"
import "./Resume.css"

const Resume = () => {
  return (
    <motion.div
      className="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="resume-content">
        <motion.div
          className="resume-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <h1>Resume</h1>
          <motion.a
            href="/files/Moses_Kioko_Resume.pdf"
            download
            className="download-button"
            whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          className="resume-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="resume-left">
            <motion.div
              className="resume-section"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="section-header">
                <Briefcase className="section-icon" />
                <h2>Professional Summary</h2>
              </div>
              <div className="section-content">
                <p>
                  A passionate and results-driven Software Engineering student with a strong foundation in software
                  development, data analysis, and web technologies. Skilled in developing scalable and efficient
                  applications using Django and React.js, with expertise in data visualization tools like Power BI.
                  Enthusiastic about leveraging technology to build innovative solutions that drive business
                  intelligence, automation, and system optimization.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="resume-section"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="section-header">
                <GraduationCap className="section-icon" />
                <h2>Education</h2>
              </div>
              <div className="section-content">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Bachelor of Science in Software Engineering</h3>
                    <h4>Murang'a University of Technology</h4>
                    <p className="timeline-date">2021 – Present</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Kenya Certificate of Secondary Education (KCSE) – B+</h3>
                    <h4>Kasikeu Boys High School</h4>
                    <p className="timeline-date">2017 – 2020</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Kenya Certificate of Primary Education (KCPE) – 351/500</h3>
                    <h4>Kwambeu Primary School</h4>
                    <p className="timeline-date">2009 – 2016</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="resume-section"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="section-header">
                <Briefcase className="section-icon" />
                <h2>Work Experience</h2>
              </div>
              <div className="section-content">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Software Engineering Intern</h3>
                    <h4>Affam Limited (Private Software Company)</h4>
                    <p className="timeline-date">May 2023 – Present</p>
                    <ul className="experience-list">
                      <li>Conducted data analysis and visualization using Power BI and Excel to generate insights.</li>
                      <li>Developed interactive dashboards to track business performance and trends.</li>
                      <li>Assisted in full-stack development, debugging, and optimizing application performance.</li>
                      <li>
                        Built and integrated RESTful APIs for seamless communication between backend and frontend.
                      </li>
                      <li>Improved system efficiency by identifying and fixing bugs in existing applications.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="resume-right">
            <motion.div
              className="resume-section"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="section-header">
                <Code className="section-icon" />
                <h2>Technical Skills</h2>
              </div>
              <div className="section-content">
                <div className="skills-group">
                  <h3>Programming Languages</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
                <div className="skills-group">
                  <h3>Software Development</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Django</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">API Development</span>
                  </div>
                </div>
                <div className="skills-group">
                  <h3>Data Analysis & Visualization</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Power BI</span>
                    <span className="skill-tag">Excel</span>
                    <span className="skill-tag">Google Sheets</span>
                  </div>
                </div>
                <div className="skills-group">
                  <h3>Database Management</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">PostgreSQL</span>
                  </div>
                </div>
                <div className="skills-group">
                  <h3>Web Technologies</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
                <div className="skills-group">
                  <h3>Version Control</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="resume-section"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="section-header">
                <Code className="section-icon" />
                <h2>Projects</h2>
              </div>
              <div className="section-content">
                <div className="project-item">
                  <h3>Smart Agricultural Marketplace Application (Final Year Project)</h3>
                  <ul className="project-details">
                    <li>
                      Developed a predictive market analysis model for tomato prices based on supply and demand trends.
                    </li>
                    <li>
                      Designed and built a web-based platform connecting farmers and buyers with real-time market
                      insights.
                    </li>
                    <li>
                      Implemented Django (backend) and React.js (frontend) to create a responsive user experience.
                    </li>
                    <li>Integrated machine learning models for price forecasting and data-driven decision-making.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="resume-section"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="section-header">
                <Award className="section-icon" />
                <h2>Certifications & Training</h2>
              </div>
              <div className="section-content">
                <ul className="cert-list">
                  <li>Networking Devices and Initial Configuration</li>
                  <li>Introduction to Data Science</li>
                  <li>Operating Systems Basics</li>
                  <li>Networking Basics</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="resume-section"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="section-header">
                <Languages className="section-icon" />
                <h2>Languages & Soft Skills</h2>
              </div>
              <div className="section-content">
                <div className="two-column">
                  <div>
                    <h3>Languages</h3>
                    <ul className="simple-list">
                      <li>English – Fluent</li>
                      <li>Kiswahili – Fluent</li>
                      <li>Kamba – Fluent</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Soft Skills</h3>
                    <ul className="simple-list">
                      <li>Problem-Solving & Critical Thinking</li>
                      <li>Strong Communication & Team Collaboration</li>
                      <li>Time Management & Project Organization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="resume-section"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="section-header">
                <Briefcase className="section-icon" />
                <h2>Contact Information</h2>
              </div>
              <div className="section-content">
                <div className="contact-info">
                  <p>
                    <strong>Address:</strong> P.O. Box 382, Sultan Hamud
                  </p>
                  <p>
                    <strong>Phone:</strong> 0743063762 / 0745595485
                  </p>
                  <p>
                    <strong>Email:</strong> moseskioko65@gmail.com
                  </p>
                  <p>
                    <strong>Nationality:</strong> Kenyan
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Resume


import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import "./Awards.css"

const awards = [
  {
    title: "Best Innovative Solution",
    organization: "Kenya Innovation Awards",
    year: 2022,
    description:
      "Awarded for the AI-Powered Personal Assistant project, recognized for its potential to improve daily productivity and accessibility.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Trophy,
  },
  {
    title: "Rising Star in Tech",
    organization: "Africa Tech Summit",
    year: 2021,
    description:
      "Recognized as one of the top emerging talents in the African tech ecosystem for contributions to open-source projects and community initiatives.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Trophy,
  },
  {
    title: "Hackathon Champion",
    organization: "Google Developer Groups Nairobi",
    year: 2020,
    description:
      "First place in the annual coding competition, developing a solution for local healthcare accessibility using mobile technology.",
    image: "/placeholder.svg?height=300&width=400",
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






// import { motion } from "framer-motion"
// import "./Awards.css"

// const awards = [
//   {
//     title: "Best Innovative Solution",
//     organization: "Kenya Innovation Awards",
//     year: 2022,
//     description:
//       "Awarded for the AI-Powered Personal Assistant project, recognized for its potential to improve daily productivity and accessibility.",
//   },
//   {
//     title: "Rising Star in Tech",
//     organization: "Africa Tech Summit",
//     year: 2021,
//     description:
//       "Recognized as one of the top emerging talents in the African tech ecosystem for contributions to open-source projects and community initiatives.",
//   },
//   {
//     title: "Hackathon Champion",
//     organization: "Google Developer Groups Nairobi",
//     year: 2020,
//     description:
//       "First place in the annual coding competition, developing a solution for local healthcare accessibility using mobile technology.",
//   },
// ]

// const Awards = () => {
//   return (
//     <motion.div
//       className="awards"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="awards-content">
//         <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
//           Awards & Recognitions
//         </motion.h1>
//         <motion.div
//           className="awards-list"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           {awards.map((award, index) => (
//             <motion.div
//               key={index}
//               className="award-item"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 * (index + 1) }}
//             >
//               <h2>{award.title}</h2>
//               <h3>
//                 {award.organization} - {award.year}
//               </h3>
//               <p>{award.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }

// export default Awards


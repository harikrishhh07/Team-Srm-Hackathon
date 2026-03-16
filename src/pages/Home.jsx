import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import './Home.css'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  }

  return (
    <section className="home">
      <div className="home-container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="home-title">
            Welcome to <span className="highlight">Team SRM Hackathon</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="home-subtitle">
            Innovate. Create. Compete. Transform your ideas into reality
          </motion.p>

          <motion.div variants={itemVariants} className="cta-buttons">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 150, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Participants</p>
            </div>
            <div className="stat">
              <h3>6</h3>
              <p>Domains</p>
            </div>
            <div className="stat">
              <h3>3</h3>
              <p>Events</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="home-spline-wrap">
          <Spline
            className="home-spline"
            scene="https://prod.spline.design/R1xRNZGEsoJdc2xn/scene.splinecode"
          />
        </div>

      </div>
    </section>
  )
}

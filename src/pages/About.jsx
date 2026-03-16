import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1 variants={itemVariants} className="section-title">
          About <span className="highlight">Team SRM Hackathon</span>
        </motion.h1>

        <div className="about-grid">
          <motion.div variants={itemVariants} className="about-card">
            <div className="card-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              To inspire and empower students to innovate, create, and collaborate in a dynamic hackathon environment where ideas come to life.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-card">
            <div className="card-icon">🎯</div>
            <h3>Our Vision</h3>
            <p>
              To build a thriving community of tech enthusiasts and creators who push boundaries and transform the digital landscape.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-card">
            <div className="card-icon">💡</div>
            <h3>Our Values</h3>
            <p>
              Innovation, collaboration, creativity, and excellence drive everything we do. We believe in fostering growth and learning.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="about-story">
          <h2>Our Story</h2>
          <p>
            Team SRM Hackathon is a premier event dedicated to fostering innovation and creativity among students. We provide a platform where brilliant minds collaborate, compete, and create groundbreaking solutions to real-world problems.
          </p>
          <p>
            With multiple domains spanning technical excellence, creative thinking, and strategic management, we ensure every participant finds their niche and makes meaningful contributions to the tech community.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="team-stats">
          <div className="team-stat">
            <h4>6</h4>
            <p>Core Domains</p>
          </div>
          <div className="team-stat">
            <h4>3</h4>
            <p>Major Events</p>
          </div>
          <div className="team-stat">
            <h4>500+</h4>
            <p>Active Members</p>
          </div>
          <div className="team-stat">
            <h4>100%</h4>
            <p>Engagement Rate</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

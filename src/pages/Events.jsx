import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Events.css'

export default function Events() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 15%'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [30, -24])
  const subtitleY = useTransform(scrollYProgress, [0, 1], [20, -14])

  const events = [
    {
      id: 1,
      name: 'Semicolon',
      date: 'April 2024',
      icon: '💻',
      description: 'A beginner-friendly coding competition where participants solve coding challenges and learn best practices.',
      participants: '100+',
      prizes: '₹50,000',
      gradient: 'linear-gradient(135deg, #0096ff, #0066cc)',
    },
    {
      id: 2,
      name: 'Ideathon',
      date: 'May 2024',
      icon: '💡',
      description: 'Transform your ideas into pitches. Present innovative solutions to real-world problems and win amazing prizes.',
      participants: '200+',
      prizes: '₹100,000',
      gradient: 'linear-gradient(135deg, #00ff88, #0096ff)',
    },
    {
      id: 3,
      name: 'Hackathon',
      date: 'June 2024',
      icon: '🚀',
      description: 'The main event! Build complete projects in 24 hours across all domains. Showcase your creativity and skills.',
      participants: '500+',
      prizes: '₹500,000',
      gradient: 'linear-gradient(135deg, #ff00ff, #0096ff)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleCardMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    event.currentTarget.style.setProperty('--mx', `${x}%`)
    event.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <section className="events" ref={sectionRef}>
      <motion.div
        className="events-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1
          className="section-title"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="highlight">Events</span>
        </motion.h1>

        <motion.p
          className="events-subtitle"
          style={{ y: subtitleY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Three incredible events packed with learning, innovation, and competition
        </motion.p>

        <motion.div className="events-progress" style={{ scaleX: scrollYProgress }} />

        <div className="events-timeline">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`event-card ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="event-content cursor-magnetic" onMouseMove={handleCardMove}>
                <div className="event-header" style={{ background: event.gradient }}>
                  <div className="event-icon">{event.icon}</div>
                </div>
                
                <div className="event-details">
                  <h3>{event.name}</h3>
                  <p className="date">📅 {event.date}</p>
                  <p className="description">{event.description}</p>
                  
                  <div className="event-stats">
                    <div className="stat">
                      <span className="stat-value">{event.participants}</span>
                      <span className="stat-label">Participants</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{event.prizes}</span>
                      <span className="stat-label">Prize Pool</span>
                    </div>
                  </div>

                  <motion.button
                    className="register-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now →
                  </motion.button>
                </div>
              </div>

              <div className="timeline-marker"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Domains.css'

export default function Domains() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 15%'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [28, -22])
  const subtitleY = useTransform(scrollYProgress, [0, 1], [22, -16])

  const domains = [
    {
      id: 1,
      name: 'Technical',
      icon: '💻',
      description: 'Develop cutting-edge software solutions, backend systems, and technical innovations.',
      color: 'linear-gradient(135deg, #0096ff, #0066cc)',
    },
    {
      id: 2,
      name: 'Non-Technical',
      icon: '📊',
      description: 'Strategy, business logic, data analysis, and project management excellence.',
      color: 'linear-gradient(135deg, #00d4ff, #00a8cc)',
    },
    {
      id: 3,
      name: 'Creatives',
      icon: '🎨',
      description: 'Design stunning UI/UX, graphics, and creative content that captivates users.',
      color: 'linear-gradient(135deg, #ff00ff, #0096ff)',
    },
    {
      id: 4,
      name: 'Publicity',
      icon: '📢',
      description: 'Marketing strategies, brand building, and communication that resonates.',
      color: 'linear-gradient(135deg, #00ff88, #0096ff)',
    },
    {
      id: 5,
      name: 'Sponsorship',
      icon: '🤝',
      description: 'Building partnerships, securing resources, and managing relationships.',
      color: 'linear-gradient(135deg, #ff6b00, #0096ff)',
    },
    {
      id: 6,
      name: 'Financial',
      icon: '💰',
      description: 'Budget management, financial planning, and resource allocation strategy.',
      color: 'linear-gradient(135deg, #00ff00, #0096ff)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
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
    <section className="domains" ref={sectionRef}>
      <motion.div
        className="domains-container"
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
          Our <span className="highlight">Domains</span>
        </motion.h1>

        <motion.p
          className="domains-subtitle"
          style={{ y: subtitleY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join the domain that matches your passion and expertise
        </motion.p>

        <motion.div className="domains-progress" style={{ scaleX: scrollYProgress }} />

        <div className="domains-grid">
          {domains.map((domain) => (
            <motion.div
              key={domain.id}
              className="domain-card cursor-magnetic"
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: -2,
                boxShadow: '0 30px 60px rgba(0, 150, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              onMouseMove={handleCardMove}
            >
              <div className="card-top" style={{ background: domain.color }}>
                <div className="icon">{domain.icon}</div>
              </div>
              <div className="card-content">
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
                <button className="domain-btn">Learn More →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

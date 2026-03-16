import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="contact">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="highlight">Touch</span>
        </motion.h1>

        <div className="contact-content">
          <motion.div variants={itemVariants} className="contact-info">
            <h2>Connect With Us</h2>
            <p>Have questions or need more information? We'd love to hear from you!</p>

            <div className="info-items">
              <motion.div 
                className="info-item"
                whileHover={{ translateX: 10 }}
              >
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@srmteamhackathon.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="info-item"
                whileHover={{ translateX: 10 }}
              >
                <div className="info-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div 
                className="info-item"
                whileHover={{ translateX: 10 }}
              >
                <div className="info-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>SRM University, Chennai</p>
                </div>
              </motion.div>

              <motion.div 
                className="info-item"
                whileHover={{ translateX: 10 }}
              >
                <div className="info-icon">🕐</div>
                <div>
                  <h4>Operating Hours</h4>
                  <p>Mon - Fri: 9 AM - 6 PM</p>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <motion.div whileHover={{ scale: 1.2 }}>
                  🔗
                </motion.div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <motion.div whileHover={{ scale: 1.2 }}>
                  📘
                </motion.div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <motion.div whileHover={{ scale: 1.2 }}>
                  🐦
                </motion.div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <motion.div whileHover={{ scale: 1.2 }}>
                  📷
                </motion.div>
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <h2>Send us a Message</h2>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

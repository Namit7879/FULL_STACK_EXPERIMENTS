import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with us today!</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="content-section">
          <h2>Contact Information</h2>
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>📍 Address</h3>
              <p>123 Tech Street, Silicon Valley, CA 94025, USA</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>✉️ Email</h3>
              <p>support@multispa.com</p>
            </div>
            <div>
              <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>🕒 Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p>Saturday: 10:00 AM - 4:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Send us a Message</h2>
          {submitted && (
            <div style={{
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: '#d4edda',
              color: '#155724',
              borderRadius: '6px',
              border: '1px solid #c3e6cb'
            }}>
              ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
              />
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="content-section">
        <h2>Why Contact Us?</h2>
        <ul className="feature-list">
          <li>Get answers to your questions quickly</li>
          <li>Discuss custom solutions for your needs</li>
          <li>Report issues and get technical support</li>
          <li>Provide feedback and suggestions</li>
          <li>Partnership and collaboration opportunities</li>
        </ul>
      </div>
    </div>
  )
}

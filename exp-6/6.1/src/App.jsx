import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(null)
  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(formData)
      setErrors({})
      setTimeout(() => handleReset(), 2000)
    } else {
      setErrors(newErrors)
    }
  }

  // Handle reset
  const handleReset = () => {
    setFormData({ fullName: '', email: '', subject: '', message: '' })
    setErrors({})
    setSubmitted(null)
  }

  return (
    <div>
      <h1>Contact Form</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Form submitted successfully!</div>}

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="output-container">
          <h2>Submitted Data:</h2>
          <div className="output-item">
            <strong>Full Name:</strong> {submitted.fullName}
          </div>
          <div className="output-item">
            <strong>Email:</strong> {submitted.email}
          </div>
          <div className="output-item">
            <strong>Subject:</strong> {submitted.subject}
          </div>
          <div className="output-item">
            <strong>Message:</strong> {submitted.message}
          </div>
        </div>
      )}
    </div>
  )
}

export default App

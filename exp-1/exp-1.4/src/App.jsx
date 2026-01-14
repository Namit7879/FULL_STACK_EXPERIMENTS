import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Add submitted data to the list
    setSubmittedData(prevData => [
      ...prevData,
      {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toLocaleString()
      }
    ])
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setErrors({})
  }

  const handleDelete = (id) => {
    setSubmittedData(submittedData.filter(item => item.id !== id))
  }

  const handleClearAll = () => {
    setSubmittedData([])
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 Simple Form SPA</h1>
          <p>Submit your information below</p>
        </header>

        <main className="main-content">
          <section className="form-section">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className={errors.subject ? 'input-error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message (at least 10 characters)"
                  rows="5"
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-submit">
                Submit Form
              </button>
            </form>
          </section>

          {submittedData.length > 0 && (
            <section className="submissions-section">
              <div className="submissions-header">
                <h2>Submitted Data ({submittedData.length})</h2>
                <button onClick={handleClearAll} className="btn btn-clear-all">
                  Clear All
                </button>
              </div>

              <div className="submissions-list">
                {submittedData.map((data) => (
                  <div key={data.id} className="submission-card">
                    <div className="submission-content">
                      <div className="submission-row">
                        <strong>Name:</strong>
                        <span>{data.name}</span>
                      </div>
                      <div className="submission-row">
                        <strong>Email:</strong>
                        <span>{data.email}</span>
                      </div>
                      <div className="submission-row">
                        <strong>Phone:</strong>
                        <span>{data.phone}</span>
                      </div>
                      <div className="submission-row">
                        <strong>Subject:</strong>
                        <span>{data.subject}</span>
                      </div>
                      <div className="submission-row">
                        <strong>Message:</strong>
                        <span className="message-text">{data.message}</span>
                      </div>
                      <div className="submission-row submission-time">
                        <strong>Submitted:</strong>
                        <span>{data.submittedAt}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="btn btn-delete"
                      title="Delete this submission"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        <footer className="footer">
          <p>&copy; MADE BY NAMIT SHARMA.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

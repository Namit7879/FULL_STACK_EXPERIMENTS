import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  // Validate form
  const validateForm = () => {
    const newErrors = {}


    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 5) {
      newErrors.password = 'Password must be at least 5 characters'
    } else if (!/^[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must start with a capital letter'
    } else if (!/^[A-Z][a-zA-Z0-9_-]/.test(formData.password)) {
      newErrors.password = 'Password cannot start with special characters'
    }

    return newErrors
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      const alertMessage = `
Form Submitted Successfully!


Email: ${formData.email}
      `.trim()
      
      alert(alertMessage)
      setSubmitted(formData)
      setErrors({})
      setTimeout(() => handleReset(), 2000)
    } else {
      setErrors(newErrors)
    }
  }

  // Handle reset
  const handleReset = () => {
    setFormData({ email: '', password: '', })
    setErrors({})
    setSubmitted(null)
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <p>All fields are required and validated before submission</p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Form submitted successfully!</div>}

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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password (min 5 chars, start with capital letter)"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
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
            <strong>Email:</strong> {submitted.email}
          </div>
        </div>
      )}
    </div>
  )
}

export default App

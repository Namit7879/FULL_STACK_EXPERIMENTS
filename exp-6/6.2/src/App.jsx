import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required'
    } else if (formData.age < 18) {
      newErrors.age = 'Age must be at least 18'
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
      setSubmitted(formData)
      setErrors({})
      setTimeout(() => handleReset(), 2000)
    } else {
      setErrors(newErrors)
    }
  }

  // Handle reset
  const handleReset = () => {
    setFormData({ name: '', email: '', password: '', age: '' })
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password (min 6 characters)"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age (18+)"
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
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
            <strong>Name:</strong> {submitted.name}
          </div>
          <div className="output-item">
            <strong>Email:</strong> {submitted.email}
          </div>
          <div className="output-item">
            <strong>Age:</strong> {submitted.age}
          </div>
        </div>
      )}
    </div>
  )
}

export default App

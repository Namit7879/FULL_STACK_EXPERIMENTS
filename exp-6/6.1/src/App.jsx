import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    dob: '',
    skillset: [],
    state: '',
  })

  const [submitted, setSubmitted] = useState(null)

  // Handle text input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle radio button change
  const handleRadioChange = (e) => {
    const { value } = e.target
    setFormData({ ...formData, gender: value })
  }

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setFormData({
        ...formData,
        skillset: [...formData.skillset, value],
      })
    } else {
      setFormData({
        ...formData,
        skillset: formData.skillset.filter((skill) => skill !== value),
      })
    }
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(formData)
  }

  // Handle reset
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      dob: '',
      skillset: [],
      state: '',
    })
    setSubmitted(null)
  }

  return (
    <div>
      <h1>User Authentication Form</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>

          {/* Gender - Radio Buttons */}
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleRadioChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleRadioChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleRadioChange}
                />
                Other
              </label>
            </div>
          </div>

          {/* Address - Textarea */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="4"
            />
          </div>

          {/* Date of Birth - Date/Time Picker */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          {/* Skillset - Checkboxes */}
          <div className="form-group">
            <label>Skillset</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value="JavaScript"
                  checked={formData.skillset.includes('JavaScript')}
                  onChange={handleCheckboxChange}
                />
                JavaScript
              </label>
              <label>
                <input
                  type="checkbox"
                  value="React"
                  checked={formData.skillset.includes('React')}
                  onChange={handleCheckboxChange}
                />
                React
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Node.js"
                  checked={formData.skillset.includes('Node.js')}
                  onChange={handleCheckboxChange}
                />
                Node.js
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Python"
                  checked={formData.skillset.includes('Python')}
                  onChange={handleCheckboxChange}
                />
                Python
              </label>
              <label>
                <input
                  type="checkbox"
                  value="MongoDB"
                  checked={formData.skillset.includes('MongoDB')}
                  onChange={handleCheckboxChange}
                />
                MongoDB
              </label>
            </div>
          </div>

          {/* State - Dropdown */}
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Pune">Pune</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>

          {/* Buttons */}
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

      {/* Display submitted data */}
      {submitted && (
        <div className="output-container">
          <h2>Submitted Data:</h2>
          <div className="output-item">
            <strong>First Name:</strong> {submitted.firstName}
          </div>
          <div className="output-item">
            <strong>Last Name:</strong> {submitted.lastName}
          </div>
          <div className="output-item">
            <strong>Gender:</strong> {submitted.gender}
          </div>
          <div className="output-item">
            <strong>Address:</strong> {submitted.address}
          </div>
          <div className="output-item">
            <strong>Date of Birth:</strong> {submitted.dob}
          </div>
          <div className="output-item">
            <strong>Skillset:</strong> {submitted.skillset.join(', ') || 'None selected'}
          </div>
          <div className="output-item">
            <strong>State:</strong> {submitted.state}
          </div>
        </div>
      )}
    </div>
  )
}

export default App

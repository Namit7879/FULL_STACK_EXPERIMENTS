import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
  }

  return (
    <div className="min-vh-100">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bootstrap React App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Buttons */}
      <div className="container mt-5">
        <div className="jumbotron bg-light p-5 rounded">
          <h1 className="display-4">Welcome to Bootstrap Components!</h1>
          <p className="lead">This is a demo application showcasing various Bootstrap components in React.</p>
          <hr className="my-4" />
          <p>Explore buttons, cards, forms, and navigation bars built with Bootstrap.</p>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary btn-lg">Primary Button</button>
            <button className="btn btn-success btn-lg">Success Button</button>
            <button className="btn btn-danger btn-lg">Danger Button</button>
            <button className="btn btn-warning btn-lg">Warning Button</button>
            <button className="btn btn-info btn-lg">Info Button</button>
            <button className="btn btn-outline-secondary btn-lg">Outline Button</button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">This is a Bootstrap card component with some example text to demonstrate the card layout.</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">Cards are flexible content containers with multiple variants and options.</p>
                <button className="btn btn-success">Explore</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">You can use cards to display information in an organized and attractive way.</p>
                <button className="btn btn-info">View Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="row mt-5 mb-5">
          <div className="col-md-8 mx-auto">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Contact Form</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    <button type="reset" className="btn btn-outline-secondary" onClick={() => setFormData({ name: '', email: '', message: '' })}>Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">&copy; 2026 Bootstrap React App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

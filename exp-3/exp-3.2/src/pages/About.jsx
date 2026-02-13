import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>
        Welcome to LinkNav - your premier destination for learning React Router and modern
        web development techniques.
      </p>

      <h2>Our Mission</h2>
      <p>
        We are dedicated to providing high-quality educational content and practical examples
        to help developers master client-side routing and Single Page Application development.
      </p>

      <h2>Link Component Benefits</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Declarative Routing</h3>
          <p>
            Link components provide a declarative way to handle navigation, making your code
            more readable and maintainable.
          </p>
        </div>
        <div className="feature-card">
          <h3>No Page Reloads</h3>
          <p>
            Eliminate full page reloads and enjoy instant navigation without losing component
            state or causing unnecessary server requests.
          </p>
        </div>
        <div className="feature-card">
          <h3>Active State Styling</h3>
          <p>
            NavLink components automatically provide active state information, allowing you to
            highlight the current navigation item.
          </p>
        </div>
        <div className="feature-card">
          <h3>Browser Integration</h3>
          <p>
            Full integration with browser history, allowing back/forward buttons to work
            seamlessly within your SPA.
          </p>
        </div>
      </div>

      <h2>Our Team</h2>
      <p>
        Our team of experienced developers is passionate about sharing best practices and helping
        the community build better web applications. We focus on practical, real-world examples
        that you can use immediately in your projects.
      </p>

      <div className="navigation-section">
        <h3>Explore More</h3>
        <p>Want to know more about what we offer?</p>
        <div className="link-group">
          <Link to="/products" className="simple-link">View Our Products</Link>
          <span className="separator">•</span>
          <Link to="/blogs" className="simple-link">Read Our Blog</Link>
          <span className="separator">•</span>
          <Link to="/dashboard" className="simple-link">User Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

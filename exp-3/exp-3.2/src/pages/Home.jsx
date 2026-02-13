import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Home Page</h1>
      <p>
        This application demonstrates the use of Link and NavLink components from React Router DOM
        for smooth navigation without page reloads.
      </p>

      <div className="navigation-section">
        <h3>Link Component Features</h3>
        <p>
          The Link component is the primary way to enable navigation between different routes in
          a React Router application. Click the links below to navigate:
        </p>
        <div className="link-group">
          <Link to="/products" className="link-example">Go to Products</Link>
          <Link to="/blogs" className="link-example">Read Blogs</Link>
          <Link to="/dashboard" className="link-example">View Dashboard</Link>
        </div>
      </div>

      <div className="feature-cards">
        <div className="feature-card">
          <h3>🚀 Smooth Navigation</h3>
          <p>
            Link components provide smooth, instant navigation without page reloads,
            creating a seamless user experience.
          </p>
        </div>
        <div className="feature-card">
          <h3>⚡ NavLink Integration</h3>
          <p>
            NavLink components automatically add active styling when their route matches
            the current URL.
          </p>
        </div>
        <div className="feature-card">
          <h3>🔗 Client-Side Routing</h3>
          <p>
            All routing happens on the client side, eliminating unnecessary server requests
            and improving performance.
          </p>
        </div>
        <div className="feature-card">
          <h3>📱 Browser History</h3>
          <p>
            Browser back and forward buttons work seamlessly with React Router, maintaining
            proper navigation history.
          </p>
        </div>
      </div>

      <div className="navigation-section">
        <h3>Navigation Examples</h3>
        <p>Use the navigation menu at the top or these quick links to explore the application:</p>
        <div className="link-group">
          <span>Quick Access:</span>
          <Link to="/about" className="simple-link">About Us</Link>
          <span className="separator">•</span>
          <Link to="/products" className="simple-link">Our Products</Link>
          <span className="separator">•</span>
          <Link to="/blogs" className="simple-link">Latest Blogs</Link>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Products() {
  const products = [
    { id: 1, name: 'React Course', price: '$29.99', description: 'Master React from basics to advanced' },
    { id: 2, name: 'Router Pro', price: '$39.99', description: 'Advanced routing techniques in React' },
    { id: 3, name: 'Web Development Kit', price: '$49.99', description: 'Complete web development bundle' },
    { id: 4, name: 'JavaScript Bootcamp', price: '$59.99', description: 'Comprehensive JavaScript training' },
  ]

  return (
    <div className="page-container">
      <h1>Our Products</h1>
      <p>
        Explore our collection of quality products and services. Each product is crafted with
        attention to detail and packed with features to help you succeed.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <div className="feature-cards">
          {products.map((product) => (
            <div key={product.id} className="feature-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#667eea', 
                fontWeight: 'bold',
                marginTop: '1rem'
              }}>
                {product.price}
              </p>
              <Link 
                to="/" 
                className="link-example"
                style={{ display: 'inline-block', marginTop: '1rem' }}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation-section">
        <h3>Continue Shopping</h3>
        <p>Discover more of our offerings:</p>
        <div className="link-group">
          <Link to="/about" className="simple-link">About Our Company</Link>
          <span className="separator">•</span>
          <Link to="/blogs" className="simple-link">Product Reviews</Link>
          <span className="separator">•</span>
          <Link to="/dashboard" className="simple-link">Track Your Order</Link>
        </div>
      </div>
    </div>
  )
}

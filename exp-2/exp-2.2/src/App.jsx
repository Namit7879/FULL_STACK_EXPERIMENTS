import { useState } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Bootstrap Card 1',
      description: 'This is the first card displaying information using Bootstrap grid system.',
      image: 'https://via.placeholder.com/300x200?text=Card+1',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Bootstrap Card 2',
      description: 'React components can be rendered dynamically with array mapping.',
      image: 'https://via.placeholder.com/300x200?text=Card+2',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Bootstrap Card 3',
      description: 'Cards are flexible content containers with multiple variants.',
      image: 'https://via.placeholder.com/300x200?text=Card+3',
      category: 'Marketing'
    },
    {
      id: 4,
      title: 'Bootstrap Card 4',
      description: 'Bootstrap provides responsive grid system for card layouts.',
      image: 'https://via.placeholder.com/300x200?text=Card+4',
      category: 'Development'
    },
    {
      id: 5,
      title: 'Bootstrap Card 5',
      description: 'Dynamic content rendering makes cards reusable and maintainable.',
      image: 'https://via.placeholder.com/300x200?text=Card+5',
      category: 'UI/UX'
    },
    {
      id: 6,
      title: 'Bootstrap Card 6',
      description: 'Easily create complex layouts with Bootstrap utility classes.',
      image: 'https://via.placeholder.com/300x200?text=Card+6',
      category: 'Backend'
    }
  ])

  const [filter, setFilter] = useState('All')

  const filteredCards = filter === 'All' 
    ? cards 
    : cards.filter(card => card.category === filter)

  const categories = ['All', 'Development', 'Design', 'Marketing', 'UI/UX', 'Backend']

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><strong>Card-Based Layout</strong></a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        {/* Title Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Dynamic Card Grid</h1>
          <p className="lead text-muted">Browse through our collection of cards dynamically rendered with Bootstrap</p>
        </div>

        {/* Filter Section */}
        <div className="mb-5">
          <h5 className="text-center mb-4">Filter by Category</h5>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {filteredCards.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm card-hover">
                <img 
                  src={card.image} 
                  className="card-img-top" 
                  alt={card.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-info mb-2" style={{ width: 'fit-content' }}>
                    {card.category}
                  </span>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text flex-grow-1">{card.description}</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary btn-sm flex-grow-1">View</button>
                    <button className="btn btn-outline-secondary btn-sm flex-grow-1">Share</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="alert alert-info text-center" role="alert">
            No cards found for the selected category.
          </div>
        )}

        {/* Statistics Section */}
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div className="card bg-primary text-white">
              <div className="card-body text-center">
                <h5 className="card-title">{cards.length}</h5>
                <p className="card-text">Total Cards</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center">
                <h5 className="card-title">{categories.length - 1}</h5>
                <p className="card-text">Categories</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-info text-white">
              <div className="card-body text-center">
                <h5 className="card-title">{filteredCards.length}</h5>
                <p className="card-text">Filtered Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">&copy; 2026 Card-Based Layout Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

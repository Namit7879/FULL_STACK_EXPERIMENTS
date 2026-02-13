import { Link } from 'react-router-dom'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React Router',
      author: 'John Doe',
      date: '2024-02-10',
      excerpt: 'Learn the basics of React Router and how to implement client-side routing in your applications.'
    },
    {
      id: 2,
      title: 'Mastering NavLink Components',
      author: 'Jane Smith',
      date: '2024-02-08',
      excerpt: 'Discover advanced techniques for styling active navigation links and improving UX.'
    },
    {
      id: 3,
      title: 'Building SPAs with React',
      author: 'Mike Johnson',
      date: '2024-02-05',
      excerpt: 'A comprehensive guide to building fast, responsive Single Page Applications.'
    },
    {
      id: 4,
      title: 'Best Practices for URL Management',
      author: 'Sarah Williams',
      date: '2024-02-01',
      excerpt: 'Learn how to manage URLs effectively and create intuitive navigation patterns.'
    },
  ]

  return (
    <div className="page-container">
      <h1>Latest Blogs</h1>
      <p>
        Stay updated with the latest articles, tips, and tricks about React Router and modern
        web development practices.
      </p>

      <div style={{ marginTop: '2rem' }}>
        {blogs.map((blog) => (
          <div key={blog.id} className="navigation-section">
            <h3>{blog.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '1rem' }}>
              By <strong>{blog.author}</strong> on {new Date(blog.date).toLocaleDateString()}
            </p>
            <p>{blog.excerpt}</p>
            <div className="link-group">
              <Link to="/" className="simple-link">Read Full Article</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-section">
        <h3>Explore Categories</h3>
        <p>Browse blog posts by category:</p>
        <div className="link-group">
          <Link to="/products" className="simple-link">React Courses</Link>
          <span className="separator">•</span>
          <Link to="/about" className="simple-link">About the Blog</Link>
          <span className="separator">•</span>
          <Link to="/" className="simple-link">Return to Home</Link>
        </div>
      </div>
    </div>
  )
}

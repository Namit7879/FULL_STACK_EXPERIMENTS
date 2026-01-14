import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>Simple Counter SPA</h1>
      <div className="counter-container">
        <h2>Counter Value: {count}</h2>
        <div className="button-group">
          <button onClick={increment} className="btn btn-increment">
            Increment (+)
          </button>
          <button onClick={decrement} className="btn btn-decrement">
            Decrement (-)
          </button>
        </div>
        <footer className="footer">
          <p>&copy; MADE BY NAMIT SHARMA.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

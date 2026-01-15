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
    <div class="App">
      <h1>Simple Counter SPA</h1>
      <div class="counter-container">
        <h2>Counter Value: {count}</h2>
        <div class="button-group">
          <button onClick={increment} class="btn btn-increment">
            Increment (+)
          </button>
          <button onClick={decrement} class="btn btn-decrement">
            Decrement (-)
          </button>
        </div>
        <footer class="footer">
          <p>&copy; MADE BY NAMIT SHARMA.</p>
        </footer>
      </div>
    </div>
  )
}
export default App

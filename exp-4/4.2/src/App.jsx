import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './store/counterSlice'
import './App.css'

export default function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="page">
      <div className="counter">
        <h1 className="heading">COUNTER DEMO</h1>
        <p className="count">{count}</p>
        <div className="controls">
          <button type="button" onClick={() => dispatch(decrement())}>-</button>
          <button type="button" onClick={() => dispatch(reset())}>Reset</button>
          <button type="button" onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </main>
  )
}

import React, { use, useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <h1>Tanoli Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count *2)}>Double your Counts </button>
     </div> 
  )
}

export default Counter
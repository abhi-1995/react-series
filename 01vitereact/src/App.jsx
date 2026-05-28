import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addCounter = () => {
    if (count >= 20) {
      setCount(20);
    } else setCount(count+1);
  }

  const removeCounter = () => {
    if (count <= 0) {
      setCount(0)
    } else {
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter: {count}</h2>
      <button onClick={addCounter}>Add Counter</button>
      <br />
      <button onClick={removeCounter}>Remove Counter</button>
    </>
  )
}

export default App

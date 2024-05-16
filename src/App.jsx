import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("salem")

  return (
    <>
      <h1>{count}</h1>
      <button
      onClick={()=>{
        count=="salem"?setCount("ssss"):setCount("salem")
      }}
      >click me</button>
       
    </>
  )
}

export default App

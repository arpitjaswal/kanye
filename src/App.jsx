import { useState } from 'react'
import reactLogo from './assets/k2.gif'
import kanye from "./assets/k.gif"
import k2 from "./assets/k2.gif"
import './App.css'
import Button from "./components/Button.jsx"

function App() {
  const [count, setCount] = useState(0)
  const audioSource = "./";
  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=ozzoeMs9ks0" target="_blank">
          <img src={kanye} className="logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=MliO-wWVlyM" target="_blank">
          <img src={k2} className="logo react" />
        </a>
      </div>
      <h1>Kanye once said</h1>
      <div className="card">
        <Button/>
        
        <h2 id='quote'>
          Press the time machine!
        </h2>
      </div>
      <p className="read-the-docs">
        Click on kanye's face to watch a full blown video about Kanye's awesomeness
      </p>
    </>
  )
}

export default App

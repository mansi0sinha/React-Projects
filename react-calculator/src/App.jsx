import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("0")
const handleNumber = (num) => {
  if (display === "0") {
    setDisplay(num)
  } else {
    setDisplay(display + num)
  }
}
  return (
    <div>
      <h1>Calculator</h1>
      <p>{display}</p>
    <button onClick={() => handleNumber("1")}>1</button>
      <button onClick={()=>handleNumber("2")}>2</button>
      <button onClick={()=>handleNumber("3")}>3</button>
    <button onClick={()=>handleNumber("4")}>4</button>
    <button onClick={()=>handleNumber("5")}>5</button>
    <button onClick={()=>handleNumber("6")}>6</button>
    <button onClick={()=>handleNumber("7")}>7</button>
    <button onClick={()=>handleNumber("8")}>8</button>
    <button onClick={()=>handleNumber("9")}>9</button>
    <button onClick={()=>handleNumber("0")}>0</button>
    <button onClick={()=>handleNumber("0")}>Clear</button>
    </div>
    
  )
}

export default App

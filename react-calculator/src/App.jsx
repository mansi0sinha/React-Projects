import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("0")
const handleNumber=(num)=>{
  if(num=="0"){
    setDisplay(num)
  }
  else{
    setDisplay(display+num)
  }
}
  return (
    <div>
      <h1>Calculator</h1>
      <p>{display}</p>
      <button onClick={()=>setDisplay(display+"1")}>1</button>
      <button onClick={()=>setDisplay(display+"2")}>2</button>
      <button onClick={()=>setDisplay(display+"3")}>3</button>
    <button onClick={()=>setDisplay(display+"4")}>4</button>
    <button onClick={()=>setDisplay(display+"5")}>5</button>
    <button onClick={()=>setDisplay(display+"6")}>6</button>
    <button onClick={()=>setDisplay(display+"7")}>7</button>
    <button onClick={()=>setDisplay(display+"8")}>8</button>
    <button onClick={()=>setDisplay(display+"9")}>9</button>
    <button onClick={()=>setDisplay(display+"0")}>0</button>
    <button onClick={()=>setDisplay("0")}>Clear</button>
    </div>
    
  )
}

export default App

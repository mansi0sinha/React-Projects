import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("0")
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [startNewNumber, setStartNewNumber] = useState(false)
 const handleNumber = (num) => {
  if (startNewNumber) {
    setDisplay(num)
    setStartNewNumber(false)
  }
  else if (display === "0") {
    setDisplay( num )
  }
  else {
    setDisplay(display + num)
  }
}
  const handleClear = () => setDisplay("0");
  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }
  const handleDelete = () => {
    if (display.length == 1) { setDisplay("0") }
    else { setDisplay(display.slice(0, -1)) }
  }
  const handleAdd = () => {
    setFirstNumber(Number(display))
    setOperator("+")
   setStartNewNumber(true)

  }
  const handleSub = () => {

  }
  const handleMul = () => {

  }
  const handleDiv = () => {

  }
  const handlePow = () => {

  }
  const handleRem = () => {

  }
  const handleEqual = () => {
    if (operator == "+") {
      setDisplay(firstNumber + Number(display))
    }
  }
  return (
    <div>
      <h1>Calculator</h1>
      <p>{display}</p>
      <button onClick={() => handleNumber("1")}>1</button>
      <button onClick={() => handleNumber("2")}>2</button>
      <button onClick={() => handleNumber("3")}>3</button>
      <button onClick={() => handleNumber("4")}>4</button>
      <button onClick={() => handleNumber("5")}>5</button>
      <button onClick={() => handleNumber("6")}>6</button>
      <button onClick={() => handleNumber("7")}>7</button>
      <button onClick={() => handleNumber("8")}>8</button>
      <button onClick={() => handleNumber("9")}>9</button>
      <button onClick={() => handleNumber("0")}>0</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleDecimal}>.</button>
      <button onClick={handleDelete}>
        ⌫
      </button>

      <button onClick={handleAdd}>+
      </button>
      <button onClick={handleSub}>-
      </button>
      <button onClick={handleMul}>*
      </button>
      <button onClick={handleDiv}>/
      </button>
      <button onClick={handleRem}>%
      </button>
      <button onClick={handlePow}>^
      </button>
      <button onClick={handleEqual}>=
      </button>
    </div>

  )
}

export default App

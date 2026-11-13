
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
      setDisplay(num)
    }
    else {
      setDisplay(display + num)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setFirstNumber(null)
    setOperator(null)
    setStartNewNumber(false)
  }

  const handleDecimal = () => {
    if (startNewNumber) {
      setDisplay("0.")
      setStartNewNumber(false)
    }
    else if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const handleDelete = () => {
    if (display.length === 1) {
      setDisplay("0")
    }
    else {
      setDisplay(display.slice(0, -1))
    }
  }

  const handleAdd = () => {
    setFirstNumber(Number(display))
    setOperator("+")
    setStartNewNumber(true)
  }

  const handleSub = () => {
    setFirstNumber(Number(display))
    setOperator("-")
    setStartNewNumber(true)
  }

  const handleMul = () => {
    setFirstNumber(Number(display))
    setOperator("*")
    setStartNewNumber(true)
  }

  const handleDiv = () => {
    setFirstNumber(Number(display))
    setOperator("/")
    setStartNewNumber(true)
  }

  const handlePow = () => {
    setFirstNumber(Number(display))
    setOperator("^")
    setStartNewNumber(true)
  }

  const handleRem = () => {
    setFirstNumber(Number(display))
    setOperator("%")
    setStartNewNumber(true)
  }

  const handleEqual = () => {
    if (operator === null || firstNumber === null) return

    let result

    if (operator === "+") {
      result = firstNumber + Number(display)
    }
    else if (operator === "-") {
      result = firstNumber - Number(display)
    }
    else if (operator === "*") {
      result = firstNumber * Number(display)
    }
    else if (operator === "/") {
      result = Number(display) === 0
        ? "Error"
        : firstNumber / Number(display)
    }
    else if (operator === "%") {
      result = firstNumber % Number(display)
    }
    else if (operator === "^") {
      result = firstNumber ** Number(display)
    }

    setDisplay(String(result))
    setFirstNumber(null)
    setOperator(null)
    setStartNewNumber(true)
  }

  return (
    <div>
      <h1>Calculator</h1>

      <p>
        {operator === null
          ? display
          : startNewNumber
            ? `${firstNumber} ${operator}`
            : `${firstNumber} ${operator} ${display}`}
      </p>

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
      <button onClick={handleDelete}>⌫</button>

      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleMul}>*</button>
      <button onClick={handleDiv}>/</button>
      <button onClick={handleRem}>%</button>
      <button onClick={handlePow}>^</button>

      <button onClick={handleEqual}>=</button>
    </div>
  )
}

export default App

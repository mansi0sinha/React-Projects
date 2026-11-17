import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="app">
  <Header/>
<div className="summary">

</div>
<div className="transaction">
  No transactions yet.
</div>
</div>
    </>
  )
}

export default App

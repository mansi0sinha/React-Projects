import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Transaction from './components/Transaction'

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [amount, setAmount] = useState("")
  const [expenseAmount, setExpenseAmount] = useState("")
  const [transactions, setTransactions] = useState([])
  const handleDelete=(id)=>{

  }
  return (
    <>
      <div className="app">
        <Header />
        <Summary income={income} expense={expense} />

        <input type='number' placeholder='Enter income' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => {
          if (Number(amount) > 0) {
            setIncome((income) => income + Number(amount))
            setAmount("")
          }
        }}
        >Add Income</button>
        <input type='number' placeholder='Enter expense' value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
        <button onClick={() => {
          if (Number(expenseAmount) > 0) {
            setExpense((expense) => expense + Number(expenseAmount))
            setExpenseAmount("")
          }
        }}>
          Add Expense
        </button>
        <button onClick={() => setTransactions((transactions) => [...transactions,({
          id: Date.now(),
          title: "Groceries",
          amount: 1500,
          type: "expense"
        })])}>Add sample transaction</button>
        <Transaction transactions={transactions} />
      </div >
    </>
  )
}

export default App

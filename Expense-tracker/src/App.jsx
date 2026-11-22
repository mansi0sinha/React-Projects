import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Transaction from './components/Transaction'

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [transactionTitle, setTransactionTitle] = useState("")
  const [transactionAmount, setTransactionAmount] = useState("")
  const [transactionType, setTransactionType] = useState("expense")
  const handleDelete = (id) => {
    const transactionDelete = transactions.find((transaction) => transaction.id === id)
    if ( !transactionDelete ) return
    if (transactionDelete.type === "income") {

      setIncome((income) => income - Number(transactionDelete.amount))
    } else {
      setExpense((expense) => expense - Number(transactionDelete.amount))
    }
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }
  return (
    <>
      <div className="app">
        <Header />
        <Summary income={income} expense={expense} />
        <input type='text' value={transactionTitle} onChange={(e) => setTransactionTitle(e.target.value)} placeholder='Title' />
        <input type='number' value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} placeholder='Amount' />
        <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={() => {
          if (transactionTitle.trim() !== "" && Number(transactionAmount) > 0) {
            setTransactions((transactions) => [...transactions, ({
              id: Date.now(),
              title: transactionTitle,
              amount: Number(transactionAmount),
              type: transactionType
            })])
            if (transactionType === "income") {
              setIncome((income) => income + Number(transactionAmount))
            }
            else {
              setExpense((expense) => expense + Number(transactionAmount))
            }
            setTransactionTitle("")
            setTransactionAmount("")
          }


        }}>Add sample transaction</button>
        <Transaction transactions={transactions} onDelete={handleDelete}
        />
      </div >
    </>
  )
}

export default App

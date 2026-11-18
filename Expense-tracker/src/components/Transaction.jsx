import React from 'react'

const Transaction = ({ transactions, onDelete }) => {
  return (
    <div className="transaction">
      {transactions.map((transaction) => (<p key={transaction.id}>{transaction.title}
        {transaction.amount}
        {transaction.type}
        <button onClick={()=>onDelete(transaction.id)}>Delete</button>
      </p>))}
    </div>
  )
}

export default Transaction
import React from 'react'

const Transaction = ({ transactions }) => {
  return (
    <div className="transaction">
      {transactions.map((transaction) => (<p key={transaction.id}>{transaction.title}
        {transaction.amount}
        {transaction.type}
      </p>))}
    </div>
  )
}

export default Transaction
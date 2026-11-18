import React from 'react'

const Summary = ({income,expense}) => {
    const balance=income-expense
  return (
    <div className="summary">
Income:-{income}
Expense:-{expense}
Balance:-{balance}
</div>
  )
}

export default Summary
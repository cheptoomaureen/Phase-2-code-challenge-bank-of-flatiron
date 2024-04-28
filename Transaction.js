import React from "react";
import TransactionItem from './TransactionItem'

function Transaction({transactions}) {
  
  return (
    <table>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>
        {/* transaction item */}
        {transactions.map(transaction=>{
            return <TransactionItem
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            key={transaction.id}
            />
        })}
    </table>
  )
}

export default Transaction

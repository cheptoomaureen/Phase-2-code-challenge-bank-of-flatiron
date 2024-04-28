import React from "react";

const Transaction = (props) => {

  let { date, description, category, amount } = props.transaction;

  let handleDelete = () => {
    fetch(`http://localhost:8001/transactions/${props.transaction.id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(deletedTransaction => {
      props.deleteTransactionFun(props.transaction);
    })
    .catch(error => console.error('Error deleting transaction:', error));
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDelete}>X</button></td> 
    </tr>
  );
};

export default Transaction;

import React, { useEffect, useState }  from "react";
import AccountContainer from "./AccountContainer";
import Transaction from "./components/Transaction.js";
import SearchForm from "./components/SearchForm.js";
function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data));
  }, []); 
  console.log(transactions);

  function handleUpdateOnSubmission(newtransaction) {
    console.log(newtransaction);
    setTransactions((transactions) => [...transactions, newtransaction]);
    const serverOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newtransaction),
    };
    fetch("https://bank-flatiron-data.onrender.com/transactions", serverOptions)
    .then((r) => r.json())
    .then((newItem) => console.log(newItem))
    .catch((err) => console.log(err));
  }
  function handleSearching(search) {
    setTransactions((transactions) =>
      transactions.filter((transaction) =>
        transaction.description.includes(search)
      )
    );
  }
  return (
    <div className="App">
      <div className="header-text">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <SearchForm onSearching={handleSearching} />
      <newTransactionForm onSubmission={handleUpdateOnSubmission} />
      <Transaction transactions={transactions} />
      <AccountContainer />
    </div>
  );
}

export default App;

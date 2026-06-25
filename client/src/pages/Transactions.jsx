import React from 'react'
import '../styles/Transactions.css'

export default function Transactions({ transactions }) {
  return (
    <div className="transactions">
      <h2>Transactions</h2>
      
      <div className="transactions-container">
        <table className="table transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Amount (KWD)</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-data">No transactions found</td>
              </tr>
            ) : (
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="transaction-id">#{transaction.id}</td>
                  <td>
                    <span className={`transaction-type type-${transaction.type}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="amount">${transaction.amount}</td>
                  <td>
                    <span className={`badge badge-${transaction.status}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td>{transaction.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="transactions-summary">
        <div className="summary-card">
          <h4>Total Transactions</h4>
          <p className="summary-value">{transactions.length}</p>
        </div>
        <div className="summary-card">
          <h4>Total Amount</h4>
          <p className="summary-value">
            ${transactions.reduce((sum, t) => sum + t.amount, 0)}
          </p>
        </div>
        <div className="summary-card">
          <h4>Completed</h4>
          <p className="summary-value">
            {transactions.filter(t => t.status === 'completed').length}
          </p>
        </div>
      </div>
    </div>
  )
}

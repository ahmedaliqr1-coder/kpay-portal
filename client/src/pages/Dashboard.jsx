import React from 'react'
import '../styles/Dashboard.css'

export default function Dashboard({ payments, transactions }) {
  const totalPayments = payments.reduce((sum, p) => sum + p.amount, 0)
  const completedPayments = payments.filter(p => p.status === 'completed').length
  const pendingPayments = payments.filter(p => p.status === 'pending').length

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Payments</h3>
          <p className="stat-value">${totalPayments}</p>
          <p className="stat-label">{payments.length} transactions</p>
        </div>
        
        <div className="stat-card success">
          <h3>Completed</h3>
          <p className="stat-value">{completedPayments}</p>
          <p className="stat-label">Successful payments</p>
        </div>
        
        <div className="stat-card warning">
          <h3>Pending</h3>
          <p className="stat-value">{pendingPayments}</p>
          <p className="stat-label">Awaiting confirmation</p>
        </div>
        
        <div className="stat-card danger">
          <h3>Failed</h3>
          <p className="stat-value">{payments.filter(p => p.status === 'failed').length}</p>
          <p className="stat-label">Failed transactions</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Recent Payments</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.slice(0, 5).map(payment => (
              <tr key={payment.id}>
                <td>#{payment.id}</td>
                <td>${payment.amount}</td>
                <td>
                  <span className={`badge badge-${payment.status}`}>
                    {payment.status}
                  </span>
                </td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-section">
        <h3>Recent Transactions</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 5).map(transaction => (
              <tr key={transaction.id}>
                <td>#{transaction.id}</td>
                <td>{transaction.type}</td>
                <td>${transaction.amount}</td>
                <td>
                  <span className={`badge badge-${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

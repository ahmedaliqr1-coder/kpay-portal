import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Payments from './pages/Payments'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [payments, setPayments] = useState([])
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch payments
    fetch('/api/payments')
      .then(res => res.json())
      .then(data => setPayments(data.payments))
      .catch(err => console.error('Error fetching payments:', err))

    // Fetch transactions
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data.transactions))
      .catch(err => console.error('Error fetching transactions:', err))
      .finally(() => setLoading(false))
  }, [])

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard payments={payments} transactions={transactions} />
      case 'payments':
        return <Payments payments={payments} setPayments={setPayments} />
      case 'transactions':
        return <Transactions transactions={transactions} />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard payments={payments} transactions={transactions} />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">KPAY Portal</h1>
          <nav className="nav">
            <button 
              className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`nav-btn ${currentPage === 'payments' ? 'active' : ''}`}
              onClick={() => setCurrentPage('payments')}
            >
              Payments
            </button>
            <button 
              className={`nav-btn ${currentPage === 'transactions' ? 'active' : ''}`}
              onClick={() => setCurrentPage('transactions')}
            >
              Transactions
            </button>
            <button 
              className={`nav-btn ${currentPage === 'settings' ? 'active' : ''}`}
              onClick={() => setCurrentPage('settings')}
            >
              Settings
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          renderPage()
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2024 KPAY Portal. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

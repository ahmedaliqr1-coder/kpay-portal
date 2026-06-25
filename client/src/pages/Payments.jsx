import React, { useState } from 'react'
import '../styles/Payments.css'

export default function Payments({ payments, setPayments }) {
  const [formData, setFormData] = useState({
    amount: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      const newPayment = await response.json()
      setPayments([newPayment, ...payments])
      setFormData({ amount: '', description: '' })
      alert('Payment created successfully!')
    } catch (error) {
      console.error('Error creating payment:', error)
      alert('Error creating payment')
    }
  }

  return (
    <div className="payments">
      <h2>Payments</h2>
      
      <div className="payments-container">
        <div className="payment-form-section">
          <h3>Create New Payment</h3>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label htmlFor="amount">Amount (KWD)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                required
                min="0.01"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter payment description"
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create Payment
            </button>
          </form>
        </div>

        <div className="payments-list-section">
          <h3>Payment History</h3>
          <div className="payments-list">
            {payments.length === 0 ? (
              <p className="no-data">No payments found</p>
            ) : (
              payments.map(payment => (
                <div key={payment.id} className="payment-item">
                  <div className="payment-info">
                    <h4>Payment #{payment.id}</h4>
                    <p className="payment-description">{payment.description || 'No description'}</p>
                    <p className="payment-date">{payment.date}</p>
                  </div>
                  <div className="payment-details">
                    <p className="payment-amount">${payment.amount}</p>
                    <span className={`badge badge-${payment.status}`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

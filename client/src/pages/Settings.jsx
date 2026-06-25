import React, { useState } from 'react'
import '../styles/Settings.css'

export default function Settings() {
  const [settings, setSettings] = useState({
    email: 'admin@kpay.com',
    phone: '+965 1234 5678',
    businessName: 'KPAY Portal',
    currency: 'KWD',
    timezone: 'Asia/Kuwait',
    notifications: true,
    twoFactor: false
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <div className="settings-container">
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="settings-section">
            <h3>Account Information</h3>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={settings.businessName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="settings-section">
            <h3>Regional Settings</h3>
            
            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                name="currency"
                value={settings.currency}
                onChange={handleChange}
              >
                <option value="KWD">Kuwaiti Dinar (KWD)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="AED">UAE Dirham (AED)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="timezone">Timezone</label>
              <select
                id="timezone"
                name="timezone"
                value={settings.timezone}
                onChange={handleChange}
              >
                <option value="Asia/Kuwait">Asia/Kuwait</option>
                <option value="Asia/Dubai">Asia/Dubai</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
              </select>
            </div>
          </div>

          <div className="settings-section">
            <h3>Security & Notifications</h3>
            
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              <label htmlFor="notifications">Enable Email Notifications</label>
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="twoFactor"
                name="twoFactor"
                checked={settings.twoFactor}
                onChange={handleChange}
              />
              <label htmlFor="twoFactor">Enable Two-Factor Authentication</label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save Settings
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>

          {saved && (
            <div className="success-message">
              ✓ Settings saved successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

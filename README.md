# KPAY Portal - Dynamic Web Application

A modern, responsive payment gateway portal built with React, Express, and Node.js.

## Features

- 💳 **Payment Management** - Create and manage payments
- 📊 **Dashboard** - Real-time analytics and statistics
- 📈 **Transactions** - Track all transactions with detailed information
- ⚙️ **Settings** - Manage account and application settings
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean and intuitive user interface

## Tech Stack

- **Frontend**: React 19, Vite, CSS3
- **Backend**: Express.js, Node.js
- **Database**: MySQL (optional for future integration)
- **Build Tool**: Vite

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kpay-portal.git
   cd kpay-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```bash
   cp .env.example .env
   ```

4. **Update environment variables**
   ```
   PORT=3000
   NODE_ENV=development
   API_URL=http://localhost:3000
   FRONTEND_URL=http://localhost:5173
   ```

## Running the Application

### Development Mode

**Terminal 1 - Start Backend Server:**
```bash
npm run dev
```

**Terminal 2 - Start Frontend Development Server:**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
kpay-portal/
├── server/
│   ├── index.js              # Main server file
│   └── routes/               # API routes
├── client/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── styles/           # CSS files
│   │   ├── App.jsx           # Main App component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   └── vite.config.js        # Vite configuration
├── public/                   # Static files
├── .env                      # Environment variables
├── package.json              # Project dependencies
└── README.md                 # This file
```

## API Endpoints

### Payments
- `GET /api/payments` - Get all payments
- `POST /api/payments` - Create a new payment

### Transactions
- `GET /api/transactions` - Get all transactions

### Health Check
- `GET /api/health` - Check API status

## Features Breakdown

### Dashboard
- View payment statistics
- Monitor transaction status
- Quick overview of recent activities

### Payments
- Create new payments
- Track payment history
- View payment details and status

### Transactions
- View all transactions
- Filter by type (payment, refund, transfer)
- Track transaction status

### Settings
- Update account information
- Configure regional settings (currency, timezone)
- Manage security preferences

## Styling

The application uses a custom CSS design with:
- Primary Color: #e60012 (KPAY Red)
- Secondary Color: #333333
- Light Background: #f5f5f5
- Responsive grid layouts
- Smooth animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Database integration (MySQL)
- [ ] User authentication
- [ ] Payment processing integration
- [ ] Advanced reporting
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Mobile app (React Native)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For support, email support@kpay.com or open an issue on GitHub.

## Deployment

### Railway Deployment

1. Push code to GitHub
2. Connect your GitHub repository to Railway
3. Set environment variables in Railway dashboard
4. Deploy

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `public`
3. Deploy

## Contact

- Website: https://kpay.com.kw
- Email: info@kpay.com
- GitHub: https://github.com/yourusername/kpay-portal

---

**Made with ❤️ by KPAY Team**

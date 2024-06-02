import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'
import { CartProvider } from './core/context/CartContext'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <CartProvider>
      <Routes />
    </CartProvider>
  //<React.StrictMode>
  //</React.StrictMode>,
)

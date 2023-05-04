import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Layout/router.jsx'
import 'react-tooltip/dist/react-tooltip.css'
import AuthProvider from './components/provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router}>
     <App />
     
   </RouterProvider>
  </AuthProvider>
)

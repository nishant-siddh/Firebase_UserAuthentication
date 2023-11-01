import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Home from './Components/Home'
import { HomeContextProvider } from './ContextAPI/Context/HomeContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeContextProvider>
      <RouterProvider router={router} />
    </HomeContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App'
import { Home } from './pages/Home'
import { CreateUser } from './pages/CreateUser'
import { EditUser } from './pages/EditUser'
import { SendMessage } from './pages/SendMessage'
import { Manage } from './pages/Manage'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home",
      element: <Navigate to={"/"} />
    },
    {
      path: "/create-user",
      element: <CreateUser />
    },
    {
      path: "/edit-user",
      element: <EditUser />
    },
    {
      path: "/send-message",
      element: <SendMessage />
    },
    {
      path: "/manage-users",
      element: <Manage />
    },

  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

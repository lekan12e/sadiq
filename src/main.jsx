import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Samsung from './devices/Samsung.jsx'
import JBL from './devices/JBL.jsx'
import PS from './devices/PS.jsx'
import Iphone from './devices/Iphone.jsx'
import AppleDetails from './device-detaisl/AppleDetails.jsx'
import SamsungDetails from './device-detaisl/SamsungDetails.jsx'
import JBLDetails from './device-detaisl/JBLDetails.jsx'

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/apple",
        element: <Iphone />
      },
      {
        path: "/samsung",
        element: <Samsung />
      },
      {
        path: "/jbl",
        element: <JBL />
      },
      {
        path: "/ps",
        element: <PS />
      }
    ]
  },
  {
    path: "/apple/:appleid",
    element: <AppleDetails />
  },
  {
    path: "/samsung/:samsungid",
    element: <SamsungDetails />
  },
  {
    path: "/jbl/:jblid",
    element: <JBLDetails />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
)

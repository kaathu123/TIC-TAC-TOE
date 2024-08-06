import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TicTac from './TicTac.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<TicTac/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

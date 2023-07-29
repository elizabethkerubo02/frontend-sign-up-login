import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Other from './Other'
import Login from './Login'
import Home from './Home'

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [users, setUsers] = useState([])
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element : <Home loggedIn={setLoggedIn}/>
      },
      {
        path: '/other',
        element: <Other/>
      }
    ]
  )
  


  return (
  <div>
    {loggedIn ? <RouterProvider router={router}/>: <Login loggedIn={setLoggedIn}/>} 
  </div>
  )
}


export default App

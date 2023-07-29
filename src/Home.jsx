import React from 'react'
import{ Link} from 'react-router-dom'


function Home({loggedIn}) {

  function logout(){
    loggedIn(false)
  }

  
  return (
    <div>Home
      <Link to='/other'>Other</Link>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
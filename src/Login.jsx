import React, {useState} from 'react'
import SignUp from './SignUp'

function Login({loggedIn }) {
  const [signUp, setSignUp] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    let form = e.target
    // let name = form[0].value
    // let pass = form[1].value
    // console.log(name,pass)
    let formData = new FormData(form)
    let data = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)

   loggedIn(true)
  }

  return (
    <div>
    { signUp ?<SignUp signUp={loggedIn} login={setSignUp}/> : <form action='submit' onSubmit={handleSubmit}>
     <input type="text"  name='username' placeholder='username' required/> 
     <input type="password" name='password' placeholder='password'required />
     <button type='submit'>Login</button>
     <p onClick={()=> setSignUp(true)}>Sign Up</p>

      </form>} 
    </div>
  )
}

export default Login
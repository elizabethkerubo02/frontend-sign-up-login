import React from 'react'

function SignUp({signUp,login}) {

    function handleSignUp(e){
        e.preventDefault()
        let form = e.target
        let formData = new FormData(form)
        let data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }
console.log(data)
        signUp(true)

    }



  return (
    <div>SignUp
        <form action="submit" onSubmit={handleSignUp}>
            <input type="text" name='username'  placeholder='username'required/>
            <input type="text" name='email'  placeholder='email' required/>
            <input type="password" name='password'  placeholder='password' required/>
            <button>Sign Up</button>

        </form>
        <p onClick={()=> login(false)}>Please Login</p>
    </div>
  )
}

export default SignUp
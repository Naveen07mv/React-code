import React from 'react'
import "./Login_task.css"

function Login_task() {
  return (
    <div className='login_taskbody'>
      <form className='inputform'>
        <h1 className='text1'>Login</h1>
        <label className='loginlable'>Email</label>
        <input className='inputlogin' type='email' placeholder='Enter a email'/><br/><br/>
        <label className='loginlable'>password</label>
        <input className='inputlogin' type='password' placeholder='enter a password'/><br/><br/>
        <button className='buttonlogin'>Login</button>

      </form>
    </div>
  )
}

export default Login_task

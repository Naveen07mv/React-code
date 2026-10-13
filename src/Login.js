import React from 'react';
import './Login.css';

const Login =()=>{
    return(
        <>
        <center>
            <div className='full'>
                <h1>Login</h1>
                <form>
                    📧<input type="email" placeholder = "enter your email"/><br/>
                    🔒<input type='password' placeholder='enter your password'/><br/>
                    {/* <a href='#' className='forget'>Forget Password?</a><br/> */}
                    <button type='submit'>Login</button><br/><br/>
                    
                    {/* 🥲Don't have an account?<a href='#' className='sign'>Sign in</a> */}
                </form>
            </div>
            </center>
        </>
    )
}


export default Login
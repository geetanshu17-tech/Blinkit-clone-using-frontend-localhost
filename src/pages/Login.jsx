import React from 'react'
import "./login.css"
import Navbar from '../components/Navbar'

const Login = () => {
  return (
   <>
    <Navbar />
    <div className="login-container">
        <div className="login-card">
        <img
            src="https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg"
            alt=""
            className="logo"
        />
        <h2>India's last minute app</h2>
        <p>Log in or Sign up</p>
        <form>
            <input
            type="tel"
            placeholder="Enter mobile number"
            pattern="[0-9]{10}"
            maxLength={10}
            required
            />
            <button className="login-btn-card">Continue</button>
        </form>
        <p>By continuing, you agree to our Terms of service & Privacy policy</p>
        </div>
    </div>
   </>

  )
}

export default Login
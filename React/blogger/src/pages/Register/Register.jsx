import React from 'react'

function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="register__inner">
          <h2 className="register__title">Register</h2>
          <form action="/" className="register__form">
            <label>
              Username
              <input type="text" placeholder="Add your username" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Add your email" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Add your password" />
            </label>
            <button>register</button>
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

import React from 'react'
import './login.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    return (
        <div className= 'wrapper bg-dark d-flex align-items-center w-100'>
        <div className= 'login'>
        <h2 className='mb-3'>Login Form</h2>

        <form>
        <div className="form-group  mb-2">
            <label htmlFor="email" className= 'form-label' required>Email Address</label>
            <input type="email" className = 'form-control'/>
            <div className="invalid-feedback">Please entrt your email</div>
        </div>
        <div className="form-group was-validated mb-2">
            <label htmlFor="password" className= 'form-label' required>Password</label>
            <input type="password" className = 'form-control'/>
            <div className="invalid-feedback">Please entrt your password</div>
        </div>
        <div className="form-group form-check mb-2">
            
            <input type="checkbox" className= 'form-check-input' />
            <label htmlFor="check" className='form-check-label' >Remember me</label>
        </div>

        <button type = 'submit' className='btn btn-success w-100 mt-2'>SIGN IN</button>
        </form>
        </div>
        </div>
    )
}

export default Login

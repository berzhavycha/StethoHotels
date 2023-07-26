import React from 'react'
import { Form, Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <section className='sign-section'>
            <Form method='post' replace className='sign-form'>
                <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                <div className="form-block">
                    <input type="email" placeholder='Email' name='email' />
                </div>
                <div className="form-block">
                    <input type="password" placeholder='Password' name='password' />
                </div>
                <button>Sign In</button>
                <p>Don`t have an account? <Link>Sing Up</Link></p>
            </Form>
        </section>
    )
}

export default Login

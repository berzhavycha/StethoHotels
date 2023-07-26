import React from 'react'
import { Form } from 'react-router-dom'
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";

export const action = async ({ request }) => {
    const formData = await request.formData()



    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });

}


const Register = () => {
    return (
        <section className='sign-section'>
            <Form method='post' className='sign-form'>
                <p>Don't have an account? Create your account, it takes less than a minute.</p>
                <div className="form-block">
                    <input type="text" name='name' placeholder='Name' />
                </div>
                <div className="form-block">
                    <input type="email" name='email' placeholder='Email' />
                </div>
                <div className="form-block">
                    <input type="password" name='password' placeholder='Password' />
                </div>
                <div className="form-block">
                    <input type="password" name='confirm' placeholder='Confirm Password' />
                </div>
                <button className='create-account'>Create an Account</button>
            </Form>
        </section>
    )
}

export default Register

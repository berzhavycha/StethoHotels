import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import './Login.css'
import FormInput from '../../common/FormInput/FormInput'
import SuccessfulForm from '../../common/SuccessfulForm/SuccessfulForm'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../data'
import useUserContext from '../../context/User/UserProvider'
import Logout from '../../common/Logout/Logout'

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const { user, setUser } = useUserContext()
    const [isRegistered, setIsRegistered] = useState(false)
    const [error, setError] = useState(false)

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setIsRegistered(true)
            })
            .catch((error) => {
                setError(true)
            });
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>

            <section className='sign-section'>
                {
                        user ?
                            <Logout />
                            :
                            !isRegistered ?
                                <Form onSubmit={handleSubmit} replace className='sign-form'>
                                    <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                                    {error && <div className="error">Email or password is wrong</div>}
                                    {inputs.map((input) => (
                                        <FormInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    ))}
                                    <button>Sign In</button>
                                    <p>Don`t have an account? <Link to='/register'>Sing Up</Link></p>
                                </Form>
                                :
                                <SuccessfulForm text={'You have successfuly signed in!'} />
                }
            </section>

        </>
    )
}

export default Login

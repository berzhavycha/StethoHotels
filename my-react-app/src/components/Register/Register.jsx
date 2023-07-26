import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from '../../common/FormInput/FormInput';
import { auth } from '../../data'
import SuccessfulForm from '../../common/SuccessfulForm/SuccessfulForm';
import useUserContext from '../../context/User/UserProvider';

const Register = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { setUser } = useUserContext()
    const [isRegistered, setIsRegistered] = useState(false)

    const inputs = [
        {
            id: 1,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setIsRegistered(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <section className='sign-section'>
            {!isRegistered ?
                <Form onSubmit={handleSubmit} className='sign-form'>
                    <p>Don't have an account? Create your account, it takes less than a minute.</p>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button className='create-account'>Create an Account</button>
                </Form>
                :
                <SuccessfulForm text={'Your account has been successfuly registered'} />
            }
        </section>
    )
}

export default Register

import React, { useState } from 'react'
import { Form, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import FormInput from '../../common/FormInput/FormInput'
import useUserContext from '../../context/User/UserProvider'
import Logout from '../../common/Logout/Logout'
import { useGetUsersQuery } from '../../features/userSlice'

import './Login.css'


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(false)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { user, logInUser } = useUserContext()
    const { data: users } = useGetUsersQuery()


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

        const userId = users.ids.find(id => users.entities[id].password === values.password && users.entities[id].email === values.email)

        if (!userId) {
            setError(true)
            return
        }

        setError(false)
        logInUser(users.entities[userId])
        setValues({ email: '', password: '' })

        if (searchParams.get('path')) {
            return navigate(`${searchParams.get('path')}`)
        } else {
            navigate('/');
        }

    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>

            <section className='sign-section'>
                {
                    user.fullName ?
                        <Logout />
                        :
                        <Form onSubmit={handleSubmit} replace className='sign-form'>
                            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                            {error && <div className="error">Email or password is wrong</div>}
                            {location.state?.message && <div className="error">{location.state?.message}</div>}
                            {searchParams.get('message') && <div className='error'>{searchParams.get('message')}</div>}
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                            <button>Sign In</button>
                            <p>Don`t have an account? <Link to={`/register${searchParams.get('path') ? `?path=${searchParams.get('path')}` : ''}`}>Sing Up</Link></p>
                        </Form>
                }
            </section >

        </>
    )
}

export default Login

import React, { useState } from 'react'

import InputElement from './InputElement'

import './ContactUs.css'

const contactUsInputs = [
    {
        id: 'firstName',
        type: "text",
        isRequired: true
    },
    {
        id: 'lastName',
        type: "text",
        isRequired: true
    },
    {
        id: 'phoneNumber',
        type: "text",
        isRequired: true
    },
    {
        id: 'email',
        type: "text",
        isRequired: true
    },
    {
        id: 'subject',
        type: "text",
        isRequired: false
    },
    {
        id: 'company',
        type: 'text',
        isRequired: false
    }
]

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        company: '',
        message: ''
    })
    const [formError, setFormError] = useState({})

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'firstName':
                if (!value) {
                    return 'This field is required';
                }
                if (value.length < 3) {
                    return 'First name must be longer than 3 symbols'
                }
                break;
            case 'lastName':
                if (!value) {
                    return 'This field is required';
                }
                if (value.length < 3) {
                    return 'Last name must be longer than 3 symbols'
                }
                break;
            case 'phoneNumber':
                if (!value) {
                    return 'This field is required';
                } else if (!/^\d{10}$/g.test(value)) {
                    return 'Invalid phone number';
                }
                break;
            case 'email':
                if (!value) {
                    return 'This field is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    return 'This is not a valid email';
                }
                break;
            case 'message':
                if (!value) {
                    return 'This field is required';
                }
                break;
            default:
                break;
        }
        return '';
    };

    const handleSubmit = e => {
        e.preventDefault();

        const updatedFormError = {};

        for (const fieldName in formData) {
            updatedFormError[fieldName] = validateField(fieldName, formData[fieldName]);
        }

        setFormError(updatedFormError)
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            subject: '',
            company: '',
            message: ''
        })
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <section className='contact-section'>
            <div className="contact-section-inner container">
                <div className="left">
                    <h2>Contact Form</h2>
                    <p>Fill out the form below, we will get back you soon.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-inputs">
                            {contactUsInputs.map(input => (
                                <InputElement
                                    id={input.id}
                                    type={input.type}
                                    isRequired={input.isRequired}
                                    formData={formData}
                                    formError={formError}
                                    handleInputChange={handleInputChange}
                                />
                            ))
                            }
                            <div className="text">
                                <label htmlFor="message">Your Message <span className="red">*</span></label>
                                <textarea
                                    id='message'
                                    value={formData.message}
                                    name='message'
                                    data-testid='message'
                                    onChange={handleInputChange}
                                >
                                </textarea>
                                {formError?.message && <span data-testid={'error-message'} className="red">{formError.message}</span>}
                            </div>
                        </div>
                        <button type='submit'>Submit Now</button>
                    </form>
                </div>
                <div className="right">
                    <div className="right-text-section">
                        <h3>Visit our location</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
                    </div>
                    <div className="right-text-section">
                        <h3>Message us</h3>
                        <p>info@exampal.com</p>
                        <p>+01 123 456 789</p>
                    </div>
                    <div className="right-text-section">
                        <h3>Follow us</h3>
                        <div className="icons">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456543.58129427925!2d54.603561354603265!3d25.074718373356404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCU0YPQsdCw0ZcgLSDQntCxJ9GU0LTQvdCw0L3RliDQkNGA0LDQsdGB0YzQutGWINCV0LzRltGA0LDRgtC4!5e1!3m2!1suk!2sua!4v1691678802140!5m2!1suk!2sua" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactUs

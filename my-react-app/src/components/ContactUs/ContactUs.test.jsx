import { render, screen } from '@testing-library/react'
import ContactUs from './ContactUs'
import userEvent from '@testing-library/user-event'

const typeIntoFormInput = async ({ firstName, lastName, phoneNumber, email, subject, company, message }) => {
    const firstNameElement = screen.getByTestId('firstName')
    const lastNameElement = screen.getByTestId('lastName')
    const phoneNumberElement = screen.getByTestId('phoneNumber')
    const emailElement = screen.getByTestId('email')
    const subjectElement = screen.getByTestId('subject')
    const companyElement = screen.getByTestId('company')
    const messageElement = screen.getByTestId('message')

    if (firstName) {
        await userEvent.type(firstNameElement, firstName)
    }

    if (lastName) {
        await userEvent.type(lastNameElement, lastName)
    }

    if (phoneNumber) {
        await userEvent.type(phoneNumberElement, phoneNumber)
    }

    if (email) {
        await userEvent.type(emailElement, email)
    }

    if (subject) {
        await userEvent.type(subjectElement, subject)
    }

    if (company) {
        await userEvent.type(companyElement, company)
    }

    if (message) {
        await userEvent.type(messageElement, message)
    }

    return {
        firstNameElement,
        lastNameElement,
        phoneNumberElement,
        emailElement,
        subjectElement,
        companyElement,
        messageElement
    }
}


const onClickSubmitButton = async () => {
    await userEvent.click(screen.getByRole('button', { name: /submit now/i }))
}


describe('ContactUs', () => {
    beforeEach(() => {
        render(<ContactUs />)
    })

    test('inputs should be initially empty', async () => {
        const allInputs = screen.getAllByRole('textbox')
        allInputs.map(input => {
            expect(input.value).toBe('')
        })
        expect(screen.getByTestId('firstName')).toBeInTheDocument()
    })

    test.each([
        ['firstName', 'Andrew'],
        ['lastName', 'Berzhavych'],
        ['phoneNumber', '+380 96 111 6345'],
        ['email', 'andrew@gmail.com'],
        ['subject', 'Money'],
        ['company', 'Apple'],
        ['message', 'I don`t know'],
    ])('should be able to type into %s', async (inputField, value) => {
        const result = await typeIntoFormInput({ [inputField]: value })
        expect(result[`${inputField}Element`].value).toBe(value)
    })

    describe('Error Handeling', () => {

        test('should show an error on required input %s', async () => {
            await onClickSubmitButton()
            expect(screen.getAllByText('This field is required')).toHaveLength(5)
        })

        test.each([
            ['firstName', 'a', 'First name must be longer than 3 symbols'],
            ['lastName', 'b', 'Last name must be longer than 3 symbols'],
            ['email', 'andrew', 'This is not a valid email'],
        ])('should show an error on invalid %s', async (inputField, value, errorMessage) => {
            await typeIntoFormInput({ [inputField]: value })
            await onClickSubmitButton()
            expect(screen.getByText(errorMessage)).toBeInTheDocument()
        })
    })

})
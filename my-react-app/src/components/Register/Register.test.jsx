import { screen } from '@testing-library/react'
import { renderWithWrapper } from '../../utils'
import { store } from '../../app/store'
import userEvent from '@testing-library/user-event'
import { server } from '../../mock/api/server'
import { rest } from 'msw'

const inputType = async ({ fullName, email, password, confirmPassword }) => {
    const fullNameElem = screen.getByPlaceholderText('Full Name')
    const emailElem = screen.getByPlaceholderText('Email')
    const passwordElem = screen.getByPlaceholderText('Password')
    const confirmPasswordElem = screen.getByPlaceholderText('Confirm Password')

    if (fullName) {
        await userEvent.type(fullNameElem, fullName)
    }

    if (email) {
        await userEvent.type(emailElem, email)
    }

    if (password) {
        await userEvent.type(passwordElem, password)
    }

    if (confirmPassword) {
        await userEvent.type(confirmPasswordElem, confirmPassword)
    }

    return {
        fullNameElem, emailElem, passwordElem, confirmPasswordElem
    }
}

describe('Register', () => {
    beforeEach(async () => {
        renderWithWrapper(['/register'], store)
        const logOutBtn = screen.queryByRole('button', { name: /log out/i })
        if (logOutBtn) {
            await userEvent.click(logOutBtn)
        }

        const apiData = [
            {
                fullName: "andrew",
                email: "a@gmail.com",
                imageUrl: "../../../public/Images/profile/profile1.jpg",
                password: "bombamoscow1!",
                id: 1
            },
            {
                fullName: "andrew",
                email: "andrew@gmail.com",
                imageUrl: "../../../public/Images/profile/profile1.jpg",
                password: "bombamoscow1!",
                id: 2
            },
        ]

        server.use(
            rest.get(`*`, (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );
    })

    test('should have empty inputs', () => {
        const inputs = screen.getAllByRole('textbox')
        inputs.forEach(input => {
            expect(input.value).toBe('')
        })
    })

    test('should input valid inputs and submit form', async () => {
        const {
            fullNameElem,
            emailElem,
            passwordElem,
            confirmPasswordElem
        } = await inputType({
            fullName: 'Andrew',
            email: 'andrewse@gmail.com',
            password: 'bombamoscow1!',
            confirmPassword: 'bombamoscow1!',
        })

        expect(fullNameElem.value).toBe('Andrew')
        expect(emailElem.value).toBe('andrewse@gmail.com')
        expect(passwordElem.value).toBe('bombamoscow1!')
        expect(confirmPasswordElem.value).toBe('bombamoscow1!')

        await userEvent.click(screen.getByRole('button', { name: 'Create an Account' }))

        const successfulTest = await screen.findByText(/enjoy your holiday/i)
        expect(successfulTest).toBeInTheDocument()
    })

    test.each([
        ['fullName', 'a', `Username should be 3-16 characters and shouldn't include any special character!`],
        ['email', 'andcom', `It should be a valid email address!`],
        ['password', 'a', `Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!`],
        ['confirmPassword', 'as', `Passwords don't match!`],
    ])
        ('should show %s error', async (field, text, errorMessage) => {
            await inputType({ [field]: text })
            await userEvent.click(screen.getByRole('button', { name: 'Create an Account' }))
            expect(screen.getByText(errorMessage))
        })


    test('should redirect to the page user came from', async () => {
        renderWithWrapper(['/blog/1'], store)

        expect(screen.getByRole('heading', { level: 1, name: 'Register' })).toBeInTheDocument()
        await inputType({
            fullName: 'Andrew',
            email: 'andrewse@gmail.com',
            password: 'bombamoscow1!',
            confirmPassword: 'bombamoscow1!',
        })
        await userEvent.click(screen.getByRole('button', { name: 'Create an Account' }))

        expect(screen.getByRole('heading', { level: 1, name: 'Blog' })).toBeInTheDocument()
    })

})
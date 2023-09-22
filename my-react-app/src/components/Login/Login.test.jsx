import { render, screen } from '@testing-library/react'
import { renderWithWrapper } from '../../utils'
import { store } from '../../app/store'
import userEvent from '@testing-library/user-event'
import { server } from '../../mock/api/server'
import { rest } from 'msw'

const inputType = async ({ emailText, passwordText }) => {
    const emailElem = screen.getByPlaceholderText('Email')
    const passwordElem = screen.getByPlaceholderText('Password')

    if (emailText) {
        await userEvent.type(emailElem, emailText)
    }

    if (passwordText) {
        await userEvent.type(passwordElem, passwordText)
    }

    return {
        emailElem, passwordElem
    }
}

describe('Login', () => {
    beforeEach(async () => {
        renderWithWrapper(['/login'], store)

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

    test('should input valid email and password and submit form', async () => {
        const { emailElem, passwordElem } = await inputType({ emailText: 'andrew@gmail.com', passwordText: 'bombamoscow1!' })

        expect(emailElem.value).toBe('andrew@gmail.com')
        expect(passwordElem.value).toBe('bombamoscow1!')

        await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

        const logoutText = await screen.findByText(/You have already logged in/i)
        expect(logoutText).toBeInTheDocument()
    })

    test('should show email error', async () => {
        await inputType({ emailText: 'and' })
        await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))
        expect(screen.getByText('It should be a valid email address!')).toBeInTheDocument()
    })

    test('should show email error', async () => {
        await inputType({ passwordText: 'and' })
        await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))
        expect(screen.getByText('Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!')).toBeInTheDocument()
    })

    test('should show message on wrong email and password', async () => {
        await inputType({ emailText: 'andrewwwww@gmail.com', passwordText: 'bombamoscow11!' })
        await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))
        expect(screen.getByText('Email or password is wrong')).toBeInTheDocument()
    })

    test('should redirect to the page user came from', async () => {
        renderWithWrapper(['/blog/1'], store)
        expect(screen.getByRole('heading', {level: 1, name: 'Login'})).toBeInTheDocument()

        await inputType({ emailText: 'andrew@gmail.com', passwordText: 'bombamoscow1!' })
        await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

        expect(screen.getByRole('heading', {level: 1, name: 'Blog'})).toBeInTheDocument()
    })
})
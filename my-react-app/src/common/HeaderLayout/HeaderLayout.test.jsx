import { render, screen } from '@testing-library/react'
import HeaderLayout from './HeaderLayout'
import { MemoryRouter } from 'react-router-dom'

const isPageTitleCorrect = (initialEntries = [], expectedTitle) => {
    render(
        <MemoryRouter initialEntries={initialEntries}>
            <HeaderLayout />
        </MemoryRouter>
    )
    expect(screen.findByText(expectedTitle, { exact: false })).resolves.toBeInTheDocument()
}

describe('HeaderLayout', () => {

    test.each([
        [['/hotels'], 'Hotels Listing'],
        [['/contactus'], 'Contact Us'],
        [['/blog'], 'Blog']
    ])('should display the correct page title', (initialEntries, expectedTitle) => {
        isPageTitleCorrect(initialEntries, expectedTitle)
    })

})
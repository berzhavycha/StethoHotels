import { render, screen } from '@testing-library/react'
import Features from './Features'
import userEvent from '@testing-library/user-event'

describe('Features', () => {
    test('should change tab content', async () => {
        render(<Features />)
        await userEvent.click(screen.getByRole('button', { name: 'User Experience' }))
        expect(screen.getByRole('button', { name: 'User Experience' })).toHaveClass('active')
    })
})
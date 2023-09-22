import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import FaqLayout from './FaqLayout'
import { MemoryRouter } from 'react-router-dom'


describe('FaqLayout', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/faq']}>
                <FaqLayout />
            </MemoryRouter>,
        )
    })

    test('should choose the appropriate accordion', async () => {
        await userEvent.click(screen.getByRole('link', { name: 'Payment' }))
        expect(screen.getByRole('heading', { level: 1, name: 'Payment' })).toBeInTheDocument()
    })

})


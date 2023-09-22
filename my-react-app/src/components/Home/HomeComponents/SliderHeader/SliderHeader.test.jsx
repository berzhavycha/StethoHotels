import { screen } from '@testing-library/react'
import { renderWithWrapper } from '../../../../utils'
import { store } from '../../../../app/store'
import userEvent from '@testing-library/user-event'

describe('SliderHeader', () => {
    test('should type to the city input', async () => {
        renderWithWrapper(['/'], store)
        await userEvent.type(screen.getByPlaceholderText('Search City'), "Par")
        await userEvent.click(screen.getByRole('button', { name: 'Search' }))
        const elems = await screen.findAllByText(/hotel listing/i)
        expect(elems[0]).toBeInTheDocument()
    })
})
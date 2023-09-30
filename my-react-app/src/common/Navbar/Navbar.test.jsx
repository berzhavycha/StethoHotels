import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useDropdownContext } from '../../context/Dropdown/DropdownProvider'
import { renderWithWrapper } from '../../utils'
import { store } from '../../app/store'

jest.mock('../../context/Dropdown/DropdownProvider.jsx', () => ({
    __esModule: true,
    ...jest.requireActual('../../context/Dropdown/DropdownProvider.jsx'),
    useDropdownContext: jest.fn().mockReturnValue({
        openDropdown: jest.fn(),
        closeDropdown: jest.fn(),
        toggleDisplayMenu: jest.fn(),
        isMenuOpen: jest.fn(),
        setIsMenuOpen: jest.fn(),
        page: {
            link: 'pages',
            dropdownLinks: [
                {
                    title: 'faq',
                    to: 'faq',
                },
            ]
        },
        location: { x: 500, y: 200 }
    })

}))


describe('Navbar', () => {
    describe('TopNavbar', () => {
        beforeEach(() => {
            renderWithWrapper(['/'], store)
        })

        test('should render navbar', () => {
            expect(screen.getAllByRole('link', { name: /home/i })[0]).toBeInTheDocument()
        })

        test('should open dropdown when i hover an appropriate link', async () => {
            const { openDropdown } = useDropdownContext()
            await userEvent.hover(screen.getAllByText(/pages/i)[0])
            expect(openDropdown).toHaveBeenCalled();
        })

        test('should navigate to another page', async () => {
            expect(screen.getAllByRole('link', { name: /home/i })[0]).toHaveClass('active')
            await userEvent.click(screen.getAllByRole('link', { name: /about us/i })[0])
            expect(screen.getAllByRole('link', { name: /about us/i })[0]).toHaveClass('active')
        })

    })

    describe('BottomNavbar', () => {

        test('should navigate to home page when i click logo', async () => {
            renderWithWrapper(['/about'], store)


            expect(screen.getAllByRole('heading', { level: 1, name: /about/i })[0]).toBeInTheDocument()
            await userEvent.click(screen.getAllByAltText('logoImg')[0])
            expect(screen.getAllByRole('heading', { level: 2, name: /enjoy your holiday/i })[0]).toBeInTheDocument()
        })

    })

    describe('Dropdown', () => {

        test('should navigate when user clicks a link on a dropdown menu', async () => {
            renderWithWrapper(['/about'], store)

            expect(screen.getAllByRole('link', { name: /about/i })[0]).toHaveClass('active')
            expect(screen.getAllByRole('heading', { level: 1, name: /about us/i })[0]).toBeInTheDocument()


            await userEvent.hover(screen.getByRole('link', { name: /pages/i }))
            const faqLink = screen.getAllByRole('link', { name: /faq/i })
            console.log(faqLink)
            await userEvent.click(faqLink[0])

            expect(screen.getAllByRole('link', { name: /about/i })[0]).not.toHaveClass('active')
            expect(screen.getAllByRole('heading', { level: 1, name: /faq/i })[0]).toBeInTheDocument()
        })


    })
})
import { render, screen } from '@testing-library/react'
import AccordionItem from './AccordionItem'
import userEvent from '@testing-library/user-event'

describe('Accordion', () => {
    beforeEach(() => {
        const mockItem = {
            question: 'Test Question',
            answer: 'Test Answer',
            clauses: ['Clause 1', 'Clause 2']
        }

        render(<AccordionItem item={mockItem} index={0} />)
    })

    test('should render the component and all questions are initially closed', () => {
        expect(screen.getByTestId('accordion-top')).toBeInTheDocument();
        expect(screen.findByTestId('accordion-content')).resolves.not.toBeInTheDocument()
    })

    test('should toggle content for accordion', async () => {
        const accordionTop = screen.getByTestId('accordion-top')
        await userEvent.click(accordionTop)

        expect(screen.findByTestId('accordion-content')).resolves.toBeInTheDocument()

        await userEvent.click(accordionTop)
        expect(screen.findByTestId('accordion-content')).resolves.not.toBeInTheDocument()
    })

})
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CloseButton from './CloseButton'

describe('CloseButton', () => {
    it('renders without crashing', () => {
        render(<CloseButton />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('uses default aria-label if none provided', () => {
        render(<CloseButton />)
        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('aria-label', 'Close')
    })

    it('uses custom aria-label if provided', () => {
        render(<CloseButton aria-label="Dismiss" />)
        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('aria-label', 'Dismiss')
    })

    it('calls onClick handler when clicked', async () => {
        const handleClick = jest.fn()
        render(<CloseButton onClick={handleClick} />)
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(handleClick).toHaveBeenCalled()
    })

    it('applies custom className', () => {
        render(<CloseButton className="custom-class" />)
        const button = screen.getByRole('button')
        expect(button.className).toMatch(/custom-class/)
    })
})

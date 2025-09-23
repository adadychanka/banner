import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
    it('renders with children', () => {
        render(<Button variant="primary">Click me</Button>)
        expect(
            screen.getByRole('button', { name: 'Click me' })
        ).toBeInTheDocument()
    })

    it('applies primary variant class', () => {
        render(<Button variant="primary">Primary Button</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('primary')
    })

    it('applies secondary variant class', () => {
        render(<Button variant="secondary">Secondary Button</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('secondary')
    })

    it('applies fullWidth class when prop is true', () => {
        render(
            <Button variant="primary" fullWidth>
                Full Width Button
            </Button>
        )
        const button = screen.getByRole('button')
        expect(button).toHaveClass('fullWidth')
    })

    it('applies custom className', () => {
        render(
            <Button variant="primary" className="custom-class">
                Custom Button
            </Button>
        )
        const button = screen.getByRole('button')
        expect(button).toHaveClass('custom-class')
    })

    it('handles click events', async () => {
        const handleClick = jest.fn()
        render(
            <Button variant="primary" onClick={handleClick}>
                Clickable Button
            </Button>
        )

        const button = screen.getByRole('button')
        await userEvent.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('passes through other button props', () => {
        const buttonProps = { variant: 'primary' as const, disabled: true }
        render(<Button {...buttonProps}>Disabled Button</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })

    it('handles invalid variant gracefully', () => {
        // @ts-expect-error Testing fallback behavior
        render(<Button variant="invalid">Fallback Button</Button>)
        const button = screen.getByRole('button')
        const className = button.className

        expect(
            className.includes('primary') || className.includes('invalid')
        ).toBe(true)
    })
})

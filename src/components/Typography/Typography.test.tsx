import { render, screen } from '@testing-library/react'
import Typography from './Typography'

describe('Typography', () => {
    it('renders with children', () => {
        render(<Typography variant="body1">Test content</Typography>)
        expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('defaults to span element', () => {
        render(<Typography variant="body1">Default element</Typography>)
        expect(screen.getByText('Default element').tagName).toBe('SPAN')
    })

    it('renders with custom component', () => {
        render(
            <Typography variant="h1" component="h1">
                Heading
            </Typography>
        )
        expect(screen.getByText('Heading').tagName).toBe('H1')
    })

    it('renders paragraph component', () => {
        render(
            <Typography variant="body1" component="p">
                Paragraph
            </Typography>
        )
        expect(screen.getByText('Paragraph').tagName).toBe('P')
    })

    it('renders h2 component', () => {
        render(
            <Typography variant="h2" component="h2">
                Subheading
            </Typography>
        )
        expect(screen.getByText('Subheading').tagName).toBe('H2')
    })

    it('applies variant class - h1', () => {
        render(<Typography variant="h1">H1 Text</Typography>)
        expect(screen.getByText('H1 Text')).toHaveClass('h1')
    })

    it('applies variant class - h2', () => {
        render(<Typography variant="h2">H2 Text</Typography>)
        expect(screen.getByText('H2 Text')).toHaveClass('h2')
    })

    it('applies variant class - body1', () => {
        render(<Typography variant="body1">Body Text</Typography>)
        expect(screen.getByText('Body Text')).toHaveClass('body1')
    })

    it('applies variant class - button', () => {
        render(<Typography variant="button">Button Text</Typography>)
        expect(screen.getByText('Button Text')).toHaveClass('button')
    })

    it('applies variant class - link', () => {
        render(<Typography variant="link">Link Text</Typography>)
        expect(screen.getByText('Link Text')).toHaveClass('link')
    })

    it('applies custom className', () => {
        render(
            <Typography variant="body1" className="custom-class">
                Custom Text
            </Typography>
        )
        expect(screen.getByText('Custom Text')).toHaveClass('custom-class')
    })

    it('applies both variant and custom className', () => {
        render(
            <Typography variant="h1" className="custom-class">
                Text
            </Typography>
        )
        const element = screen.getByText('Text')
        expect(element).toHaveClass('h1')
        expect(element).toHaveClass('custom-class')
    })

    it('handles invalid variant gracefully', () => {
        // @ts-expect-error Testing fallback behavior
        render(<Typography variant="invalid">Fallback Text</Typography>)
        const element = screen.getByText('Fallback Text')
        const className = element.className
        // Should either have body1 (fallback) or invalid class (if defined in CSS)
        expect(
            className.includes('body1') || className.includes('invalid')
        ).toBe(true)
    })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dialog from './Dialog'
import { useEscapeKey } from '../../utilities/useEscapeKey'
import { useFocusFirstInteractiveElement } from '../../utilities/useFocusFirstInteractiveElement'

// Mock the utility hooks to isolate Dialog component testing
jest.mock('../../utilities/useEscapeKey', () => ({
    useEscapeKey: jest.fn(),
}))

jest.mock('../../utilities/useFocusFirstInteractiveElement', () => ({
    useFocusFirstInteractiveElement: jest.fn(() => jest.fn()),
}))

// Type the mocked functions
const mockUseEscapeKey = useEscapeKey as jest.MockedFunction<
    typeof useEscapeKey
>
const mockUseFocusFirstInteractiveElement =
    useFocusFirstInteractiveElement as jest.MockedFunction<
        typeof useFocusFirstInteractiveElement
    >
const mockFocusFunction = jest.fn()

describe('Dialog', () => {
    const defaultProps = {
        children: <div data-testid="dialog-content">Dialog Content</div>,
        open: true,
        onClose: jest.fn(),
    }

    beforeEach(() => {
        jest.clearAllMocks()
        mockUseEscapeKey.mockClear()
        mockFocusFunction.mockClear()
        mockUseFocusFirstInteractiveElement.mockClear()
        // Reset the focus function mock return value
        mockUseFocusFirstInteractiveElement.mockReturnValue(mockFocusFunction)
    })

    describe('when dialog is open', () => {
        it('should render dialog backdrop with correct testid', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            expect(
                screen.getByTestId('business-funding-banner-dialog')
            ).toBeInTheDocument()
        })

        it('should render dialog element with open attribute', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).toBeInTheDocument()
            expect(dialogElement).toHaveAttribute('open')
        })

        it('should render children inside dialog', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
            expect(screen.getByText('Dialog Content')).toBeInTheDocument()
        })

        it('should apply correct CSS classes when open', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            const backdrop = screen.getByTestId(
                'business-funding-banner-dialog'
            )
            expect(backdrop).toHaveClass('dialogBackdrop')
            expect(backdrop).not.toHaveClass('dialogBackdropHidden')
        })

        it('should apply fullScreen class when fullScreen prop is true', () => {
            // Arrange
            render(<Dialog {...defaultProps} fullScreen={true} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).toHaveClass('dialogContentFullScreen')
        })

        it('should apply animated class when animated prop is true', () => {
            // Arrange
            render(<Dialog {...defaultProps} animated={true} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).toHaveClass('dialogContentAnimated')
        })

        it('should apply both fullScreen and animated classes when both props are true', () => {
            // Arrange
            render(
                <Dialog {...defaultProps} fullScreen={true} animated={true} />
            )

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).toHaveClass('dialogContentFullScreen')
            expect(dialogElement).toHaveClass('dialogContentAnimated')
        })
    })

    describe('when dialog is closed', () => {
        it('should render dialog element without open attribute when closed', () => {
            // Arrange
            render(<Dialog {...defaultProps} open={false} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog', { hidden: true })
            expect(dialogElement).toBeInTheDocument()
            expect(dialogElement).not.toHaveAttribute('open')
        })

        it('should apply hidden backdrop class when closed', () => {
            // Arrange
            render(<Dialog {...defaultProps} open={false} />)

            // Act & Assert
            const backdrop = screen.getByTestId(
                'business-funding-banner-dialog'
            )
            expect(backdrop).toHaveClass('dialogBackdrop')
            expect(backdrop).toHaveClass('dialogBackdropHidden')
        })

        it('should still render children when closed', () => {
            // Arrange
            render(<Dialog {...defaultProps} open={false} />)

            // Act & Assert
            expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
            expect(screen.getByText('Dialog Content')).toBeInTheDocument()
        })
    })

    describe('prop variations', () => {
        it('should not apply fullScreen class when fullScreen prop is false', () => {
            // Arrange
            render(<Dialog {...defaultProps} fullScreen={false} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).not.toHaveClass('dialogContentFullScreen')
        })

        it('should not apply animated class when animated prop is false', () => {
            // Arrange
            render(<Dialog {...defaultProps} animated={false} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).not.toHaveClass('dialogContentAnimated')
        })

        it('should not apply fullScreen class when fullScreen prop is undefined', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).not.toHaveClass('dialogContentFullScreen')
        })

        it('should not apply animated class when animated prop is undefined', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            const dialogElement = screen.getByRole('dialog')
            expect(dialogElement).not.toHaveClass('dialogContentAnimated')
        })
    })

    describe('hook integration', () => {
        it('should call useEscapeKey with onClose and open parameters', () => {
            // Arrange
            const mockOnClose = jest.fn()

            // Act
            render(
                <Dialog {...defaultProps} onClose={mockOnClose} open={true} />
            )

            // Assert
            expect(mockUseEscapeKey).toHaveBeenCalledWith(mockOnClose, true)
        })

        it('should call useEscapeKey with updated parameters when props change', () => {
            // Arrange
            const mockOnClose = jest.fn()
            const { rerender } = render(
                <Dialog {...defaultProps} onClose={mockOnClose} open={true} />
            )

            // Act
            const newOnClose = jest.fn()
            rerender(
                <Dialog {...defaultProps} onClose={newOnClose} open={false} />
            )

            // Assert
            expect(mockUseEscapeKey).toHaveBeenCalledWith(newOnClose, false)
        })

        it('should call useFocusFirstInteractiveElement with dialog ref', () => {
            // Arrange & Act
            render(<Dialog {...defaultProps} />)

            // Assert
            expect(mockUseFocusFirstInteractiveElement).toHaveBeenCalledWith(
                expect.objectContaining({
                    current: expect.any(HTMLDialogElement),
                })
            )
        })
    })

    describe('accessibility and focus management', () => {
        it('should have proper dialog role', () => {
            // Arrange
            render(<Dialog {...defaultProps} />)

            // Act & Assert
            expect(screen.getByRole('dialog')).toBeInTheDocument()
        })

        it('should call focus function when dialog opens', () => {
            // Arrange & Act
            render(<Dialog {...defaultProps} open={true} />)

            // Assert
            expect(mockFocusFunction).toHaveBeenCalledTimes(1)
        })

        it('should not call focus function when dialog is closed', () => {
            // Arrange & Act
            render(<Dialog {...defaultProps} open={false} />)

            // Assert
            expect(mockFocusFunction).not.toHaveBeenCalled()
        })

        it('should call focus function when dialog opens after being closed', () => {
            // Arrange
            const { rerender } = render(
                <Dialog {...defaultProps} open={false} />
            )

            // Act
            rerender(<Dialog {...defaultProps} open={true} />)

            // Assert
            expect(mockFocusFunction).toHaveBeenCalledTimes(1)
        })
    })

    describe('complex scenarios', () => {
        it('should handle multiple children correctly', () => {
            // Arrange
            const multipleChildren = (
                <>
                    <div data-testid="child-1">First Child</div>
                    <div data-testid="child-2">Second Child</div>
                    <button data-testid="child-button">Action</button>
                </>
            )

            render(
                <Dialog {...defaultProps} open={true}>
                    {multipleChildren}
                </Dialog>
            )

            // Act & Assert
            expect(screen.getByTestId('child-1')).toBeInTheDocument()
            expect(screen.getByTestId('child-2')).toBeInTheDocument()
            expect(screen.getByTestId('child-button')).toBeInTheDocument()
        })

        it('should maintain dialog structure with interactive content', async () => {
            // Arrange
            const mockCallback = jest.fn()
            const interactiveContent = (
                <div>
                    <input
                        data-testid="dialog-input"
                        placeholder="Enter text"
                    />
                    <button data-testid="dialog-button" onClick={mockCallback}>
                        Click me
                    </button>
                </div>
            )

            render(
                <Dialog {...defaultProps} open={true}>
                    {interactiveContent}
                </Dialog>
            )

            // Act
            await userEvent.type(
                screen.getByTestId('dialog-input'),
                'test input'
            )
            await userEvent.click(screen.getByTestId('dialog-button'))

            // Assert
            expect(screen.getByTestId('dialog-input')).toHaveValue('test input')
            expect(mockCallback).toHaveBeenCalledTimes(1)
        })
    })
})

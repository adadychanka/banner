import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BusinessFundingBannerDialog from './BusinessFundingDialog'

// Mock the child components to isolate testing
jest.mock('../../components/Dialog/Dialog', () => {
    return function MockDialog({
        children,
        open,
        onClose,
        animated,
    }: {
        children: React.ReactNode
        open: boolean
        onClose: () => void
        animated?: boolean
    }) {
        return (
            <div
                data-testid="mock-dialog"
                data-open={open}
                data-animated={animated}
            >
                <button onClick={onClose} data-testid="mock-close-button">
                    Close Dialog
                </button>
                {children}
            </div>
        )
    }
})

jest.mock('../BusinessFundingBanner/BusinessFundingBanner', () => {
    return function MockBusinessFundingBanner({
        onClose,
    }: {
        onClose?: () => void
    }) {
        return (
            <div data-testid="mock-business-funding-banner">
                <button onClick={onClose} data-testid="mock-banner-close">
                    Close Banner
                </button>
            </div>
        )
    }
})

describe('BusinessFundingBannerDialog', () => {
    const defaultProps = {
        open: true,
        onClose: jest.fn(),
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('when dialog is open', () => {
        it('should render dialog with business funding banner when open is true', () => {
            // Arrange
            render(<BusinessFundingBannerDialog {...defaultProps} />)

            // Act & Assert
            expect(screen.getByTestId('mock-dialog')).toBeInTheDocument()
            expect(
                screen.getByTestId('mock-business-funding-banner')
            ).toBeInTheDocument()
        })

        it('should pass open prop to dialog component', () => {
            // Arrange
            render(
                <BusinessFundingBannerDialog {...defaultProps} open={true} />
            )

            // Act & Assert
            const dialog = screen.getByTestId('mock-dialog')
            expect(dialog).toHaveAttribute('data-open', 'true')
        })

        it('should pass animated prop to dialog component', () => {
            // Arrange
            render(<BusinessFundingBannerDialog {...defaultProps} />)

            // Act & Assert
            const dialog = screen.getByTestId('mock-dialog')
            expect(dialog).toHaveAttribute('data-animated', 'true')
        })

        it('should call onClose when dialog close is triggered', async () => {
            // Arrange
            const mockOnClose = jest.fn()
            render(
                <BusinessFundingBannerDialog
                    {...defaultProps}
                    onClose={mockOnClose}
                />
            )

            // Act
            await userEvent.click(screen.getByTestId('mock-close-button'))

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(1)
        })

        it('should call onClose when banner close is triggered', async () => {
            // Arrange
            const mockOnClose = jest.fn()
            render(
                <BusinessFundingBannerDialog
                    {...defaultProps}
                    onClose={mockOnClose}
                />
            )

            // Act
            await userEvent.click(screen.getByTestId('mock-banner-close'))

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(1)
        })
    })

    describe('when dialog is closed', () => {
        it('should not render anything when open is false and keepMounted is not provided', () => {
            // Arrange
            render(
                <BusinessFundingBannerDialog {...defaultProps} open={false} />
            )

            // Act & Assert
            expect(screen.queryByTestId('mock-dialog')).not.toBeInTheDocument()
            expect(
                screen.queryByTestId('mock-business-funding-banner')
            ).not.toBeInTheDocument()
        })

        it('should not render anything when open is false and keepMounted is false', () => {
            // Arrange
            render(
                <BusinessFundingBannerDialog
                    {...defaultProps}
                    open={false}
                    keepMounted={false}
                />
            )

            // Act & Assert
            expect(screen.queryByTestId('mock-dialog')).not.toBeInTheDocument()
            expect(
                screen.queryByTestId('mock-business-funding-banner')
            ).not.toBeInTheDocument()
        })

        it('should render dialog when open is false but keepMounted is true', () => {
            // Arrange
            render(
                <BusinessFundingBannerDialog
                    {...defaultProps}
                    open={false}
                    keepMounted={true}
                />
            )

            // Act & Assert
            expect(screen.getByTestId('mock-dialog')).toBeInTheDocument()
            expect(
                screen.getByTestId('mock-business-funding-banner')
            ).toBeInTheDocument()
        })

        it('should pass open false to dialog when open is false but keepMounted is true', () => {
            // Arrange
            render(
                <BusinessFundingBannerDialog
                    {...defaultProps}
                    open={false}
                    keepMounted={true}
                />
            )

            // Act & Assert
            const dialog = screen.getByTestId('mock-dialog')
            expect(dialog).toHaveAttribute('data-open', 'false')
        })
    })

    describe('component integration', () => {
        it('should pass onClose prop to both dialog and banner components', async () => {
            // Arrange
            const mockOnClose = jest.fn()
            render(
                <BusinessFundingBannerDialog
                    {...defaultProps}
                    onClose={mockOnClose}
                />
            )

            // Act - Test dialog close
            await userEvent.click(screen.getByTestId('mock-close-button'))

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(1)

            // Act - Test banner close
            await userEvent.click(screen.getByTestId('mock-banner-close'))

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(2)
        })
    })
})

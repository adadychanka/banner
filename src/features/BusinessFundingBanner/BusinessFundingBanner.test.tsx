import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BusinessFundingBanner from './BusinessFundingBanner'

describe('BusinessFundingBanner', () => {
    it('renders the banner title and content', () => {
        render(<BusinessFundingBanner />)
        expect(
            screen.getByText('Get the Business Funding You Need')
        ).toBeInTheDocument()

        expect(screen.getByTestId('banner')).toBeInTheDocument()
    })

    it('renders the Apply Now button and More Information link', () => {
        render(<BusinessFundingBanner />)
        expect(
            screen.getByRole('button', { name: /apply now/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /more information/i })
        ).toBeInTheDocument()
    })

    it('calls onClose when the close button is clicked', async () => {
        const onClose = jest.fn()
        render(<BusinessFundingBanner onClose={onClose} />)

        const closeButton = screen.getByRole('button', { name: /close/i })

        await userEvent.click(closeButton)
        expect(onClose).toHaveBeenCalled()
    })
})

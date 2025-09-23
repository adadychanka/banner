import Dialog from '../../components/Dialog/Dialog'
import BusinessFundingBanner from '../BusinessFundingBanner/BusinessFundingBanner'

function BusinessFundingBannerDialog({
    open,
    onClose,
    keepMounted,
}: {
    open: boolean
    onClose: () => void
    keepMounted?: boolean
}) {
    if (!open && !keepMounted) return null

    return (
        <Dialog open={open} onClose={onClose}>
            <BusinessFundingBanner onClose={onClose} />
        </Dialog>
    )
}

export default BusinessFundingBannerDialog

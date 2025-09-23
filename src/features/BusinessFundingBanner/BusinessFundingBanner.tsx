import { useMemo } from 'react'
import Banner from '../../components/Banner/Banner'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import Typography from '../../components/Typography/Typography'
import useIsMobile from '../../utilities/useIsMobile'
import BusinessFundingBannerContent from './BusinessFundingBannerContent'

function BusinessFundingBanner({ onClose }: { onClose?: () => void }) {
    const isMobile = useIsMobile()

    const actions = useMemo(() => {
        return [
            <Button key="primary" variant="primary" fullWidth={isMobile}>
                <Typography variant="button">Apply Now</Typography>
            </Button>,
            <Link key="link" href="https://finom.co/">
                <Typography variant="link">More Information</Typography>
            </Link>,
        ]
    }, [isMobile])

    return (
        <Banner
            title="Get the Business Funding You Need"
            content={<BusinessFundingBannerContent />}
            actions={actions}
            onClose={onClose}
        />
    )
}

export default BusinessFundingBanner

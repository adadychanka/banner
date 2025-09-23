import { useMemo } from 'react'
import Banner from '../../components/Banner/Banner'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import BusinessFundingBannerContent from './BusinessFundingBannerContent'
import Typography from '../../components/Typography/Typography'

function BusinessFundingBanner() {
    const actions = useMemo(() => {
        return [
            <Button key="primary" variant="primary">
                <Typography variant="button">Apply Now</Typography>
            </Button>,
            <Link key="link" href="https://finom.co/">
                <Typography variant="link">More Information</Typography>
            </Link>,
        ]
    }, [])

    return (
        <Banner
            title="Get the Business Funding You Need"
            content={<BusinessFundingBannerContent />}
            actions={actions}
        />
    )
}

export default BusinessFundingBanner

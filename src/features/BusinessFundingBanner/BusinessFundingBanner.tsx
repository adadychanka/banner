import { useMemo } from 'react'
import Banner from '../../components/Banner/Banner'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import BusinessFundingBannerContent from './BusinessFundingBannerContent'

function BusinessFundingBanner() {
    const actions = useMemo(() => {
        return [
            <Button key="primary" variant="primary">
                Apply Now
            </Button>,
            <Link key="link" href="https://finom.co/">
                More Information
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

import { useMemo } from 'react'
import Banner from '../../components/Banner/Banner'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'

function BusinessFundingBanner() {
    const actions = useMemo(() => {
        return [
            <Button key="primary" variant="primary">
                Apply Now
            </Button>,
            <Link key="link" href="https://finom.co/">
                Learn More
            </Link>,
        ]
    }, [])

    return (
        <Banner
            title="Get the Business Funding You Need"
            content={<p>Banner</p>}
            actions={actions}
        />
    )
}

export default BusinessFundingBanner

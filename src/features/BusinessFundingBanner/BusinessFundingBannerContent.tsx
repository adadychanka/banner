import styles from './BusinessFundingBannerContent.module.css'
import checkIcon from '../../assets/check-solid.svg'

type BenefitOption = {
    title: string
}

const BENEFITS: BenefitOption[] = [
    {
        title: 'Fast approval process',
    },
    {
        title: 'Flexible repayment terms',
    },
    {
        title: 'Competitive interest rates',
    },
] as const

function BusinessFundingBannerContent() {
    return (
        <div className={styles.businessFundingBannerContent}>
            <p
                key="description"
                className={styles.businessFundingBannerContentEntry}
            >
                Expand your business with a flexible loan tailored to your
                needs. Whether you're investing in new equipment, increasing
                inventory, or boosting cash flow, we offer quick approvals and
                competitive rates to keep your business growing.
            </p>

            <div>
                {BENEFITS.map((benefit) => (
                    <div
                        key={benefit.title}
                        className={styles.businessFundingBannerContentBenefit}
                    >
                        <span>
                            <img src={checkIcon} alt="Check" />
                        </span>
                        <span>{benefit.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BusinessFundingBannerContent

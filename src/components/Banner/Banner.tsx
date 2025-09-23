import { memo, type ReactElement } from 'react'
import coinsCurrencyBg from '../../assets/coins-currency.png'
import CloseButton from '../CloseButton/CloseButton'
import styles from './Banner.module.css'
import Typography from '../Typography/Typography'

function Banner(props: {
    title: string
    content: ReactElement
    actions: ReactElement[]
}) {
    const { title, content, actions } = props

    return (
        <div className={styles.banner} data-testid="banner">
            <div className={styles.bannerHeader} data-testid="banner-header">
                <Typography
                    className={styles.bannerTitle}
                    variant="h1"
                    data-testid="banner-title"
                >
                    {title}
                </Typography>

                <div
                    className={styles.bannerCloseButton}
                    data-testid="banner-close-button"
                >
                    <CloseButton onClick={() => {}} aria-label="Close banner" />
                </div>
            </div>

            <div className={styles.bannerContent}>{content}</div>

            {actions.length > 0 && (
                <div className={styles.bannerActions}>
                    {actions.map((action) => (
                        <div key={action.key}>{action}</div>
                    ))}
                </div>
            )}

            <div className={styles.bannerImage}>
                <img src={coinsCurrencyBg} alt="" />
            </div>
        </div>
    )
}

export default memo(Banner)

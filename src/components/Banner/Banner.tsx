import { memo, type ReactElement } from 'react'
import coinsCurrencyDesktop from '../../assets/coins-currency-desktop.png'
import coinsCurrencyMobile from '../../assets/coins-currency-mobile.png'
import CloseButton from '../CloseButton/CloseButton'
import Typography from '../Typography/Typography'
import styles from './Banner.module.css'
import useIsMobile from '../../utilities/useIsMobile'

export type BannerProps = {
    title: string
    content: ReactElement
    actions: ReactElement[]
    onClose?: () => void
}

function Banner(props: BannerProps) {
    const { title, content, actions, onClose } = props

    const isMobile = useIsMobile()

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

                {onClose && (
                    <div
                        className={styles.bannerCloseButton}
                        data-testid="banner-close-button"
                    >
                        <CloseButton
                            onClick={onClose}
                            aria-label="Close banner"
                        />
                    </div>
                )}
            </div>

            <div className={styles.bannerContent}>{content}</div>

            {actions.length > 0 && (
                <div className={styles.bannerActions}>
                    {actions.map((action) => (
                        <div className={styles.bannerAction} key={action.key}>
                            {action}
                        </div>
                    ))}
                </div>
            )}

            {!isMobile && (
                <div className={styles.bannerImage}>
                    <picture>
                        <source
                            srcSet={coinsCurrencyDesktop}
                            media="(min-width: 601px)"
                        />
                        <source
                            srcSet={coinsCurrencyMobile}
                            media="(max-width: 599px)"
                        />
                        <img src={coinsCurrencyDesktop} alt="" />
                    </picture>
                </div>
            )}
        </div>
    )
}

export default memo(Banner)

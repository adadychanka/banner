import { memo, type ReactElement } from 'react'
import coinsCurrencyBg from '../../assets/coins-currency.png'
import CloseButton from '../CloseButton/CloseButton'
import styles from './Banner.module.css'

function Banner(props: {
    title: string
    content: ReactElement
    actions: ReactElement
}) {
    const { title, content, actions } = props

    return (
        <div className={styles.banner}>
            <div className={styles.bannerHeader}>
                <h1>{title}</h1>

                <div>
                    <CloseButton onClick={() => {}} />
                </div>
            </div>

            <div className={styles.bannerContent}>{content}</div>

            <div className={styles.bannerActions}>{actions}</div>
            <div className={styles.bannerImage}>
                <img src={coinsCurrencyBg} alt="" />
            </div>
        </div>
    )
}

export default memo(Banner)

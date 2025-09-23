import closeIcon from '../../assets/close.svg'
import styles from './CloseButton.module.css'

const DEFAULT_ARIA_LABEL = 'Close'

function CloseButton({
    onClick,
    ariaLabel,
}: {
    onClick: () => void
    ariaLabel?: string
}) {
    return (
        <button
            aria-label={ariaLabel || DEFAULT_ARIA_LABEL}
            onClick={onClick}
            className={styles.closeButton}
        >
            <img
                src={closeIcon}
                alt=""
                onClick={onClick}
                className={styles.closeIcon}
            />
        </button>
    )
}

export default CloseButton

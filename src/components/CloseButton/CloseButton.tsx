import type { HTMLAttributes } from 'react'
import closeIcon from '../../assets/close.svg'
import styles from './CloseButton.module.css'
import { cn } from '../../utilities/cn'

const DEFAULT_ARIA_LABEL = 'Close'

type CloseButtonProps = HTMLAttributes<HTMLButtonElement>

function CloseButton({
    'aria-label': ariaLabel,
    className,
    ...props
}: CloseButtonProps) {
    return (
        <button
            aria-label={ariaLabel || DEFAULT_ARIA_LABEL}
            className={cn(styles.closeButton, className)}
            {...props}
        >
            <img src={closeIcon} alt="" className={styles.closeIcon} />
        </button>
    )
}

export default CloseButton

import { cn } from '../../utilities/cn'
import styles from './Dialog.module.css'

function Dialog({
    children,
    open,
    onClose,
}: {
    children: React.ReactNode
    open: boolean
    onClose: () => void
}) {
    return (
        <div
            className={cn(styles.dialogBackdrop, {
                [styles.dialogBackdropHidden]: !open,
            })}
            data-testid="business-funding-banner-dialog"
            onKeyDown={(e) => {
                if (e.key === 'Escape') {
                    e.preventDefault()
                    e.stopPropagation()
                    onClose()
                }
            }}
        >
            <div className={styles.dialogContent}>{children}</div>
        </div>
    )
}

export default Dialog

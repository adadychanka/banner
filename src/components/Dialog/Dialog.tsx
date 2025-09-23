import { cn } from '../../utilities/cn'
import { useEscapeKey } from '../../utilities/useEscapeKey'
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
    useEscapeKey(onClose, open)

    return (
        <div
            className={cn(styles.dialogBackdrop, {
                [styles.dialogBackdropHidden]: !open,
            })}
            data-testid="business-funding-banner-dialog"
        >
            <div className={styles.dialogContent}>{children}</div>
        </div>
    )
}

export default Dialog

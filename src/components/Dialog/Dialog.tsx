import { cn } from '../../utilities/cn'
import { useEscapeKey } from '../../utilities/useEscapeKey'
import styles from './Dialog.module.css'

function Dialog({
    children,
    open,
    onClose,
    fullScreen,
}: {
    children: React.ReactNode
    open: boolean
    onClose: () => void
    fullScreen?: boolean
}) {
    useEscapeKey(onClose, open)

    return (
        <div
            className={cn(styles.dialogBackdrop, {
                [styles.dialogBackdropHidden]: !open,
            })}
            data-testid="business-funding-banner-dialog"
        >
            <div
                className={cn(styles.dialogContent, {
                    [styles.dialogContentFullScreen]: fullScreen,
                })}
            >
                {children}
            </div>
        </div>
    )
}

export default Dialog

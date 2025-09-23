import { useLayoutEffect, useRef } from 'react'
import { cn } from '../../utilities/cn'
import { useEscapeKey } from '../../utilities/useEscapeKey'
import { useFocusFirstInteractiveElement } from '../../utilities/useFocusFirstInteractiveElement'
import styles from './Dialog.module.css'

function Dialog({
    children,
    open,
    onClose,
    fullScreen,
    animated,
}: {
    children: React.ReactNode
    open: boolean
    onClose: () => void
    fullScreen?: boolean
    animated?: boolean
}) {
    useEscapeKey(onClose, open)

    const dialogRef = useRef<HTMLDivElement>(null)

    const focusFirstInteractiveElement =
        useFocusFirstInteractiveElement(dialogRef)

    useLayoutEffect(() => {
        if (open) {
            focusFirstInteractiveElement()
        }
    }, [open, focusFirstInteractiveElement])

    return (
        <div
            className={cn(styles.dialogBackdrop, {
                [styles.dialogBackdropHidden]: !open,
            })}
            ref={dialogRef}
            data-testid="business-funding-banner-dialog"
        >
            <div
                className={cn(styles.dialogContent, {
                    [styles.dialogContentFullScreen]: fullScreen,
                    [styles.dialogContentAnimated]: animated,
                })}
            >
                {children}
            </div>
        </div>
    )
}

export default Dialog

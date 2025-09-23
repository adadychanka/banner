import { useEffect, useRef, useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import BusinessFundingDialog from './features/BusinessFundingDialog/BusinessFundingDialog'

function App() {
    const [open, setOpen] = useState(true)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(
        function restoreFocus() {
            if (buttonRef.current) {
                if (!open) {
                    buttonRef.current.focus()
                }
            }
        },
        [open]
    )

    return (
        <main className={styles.app}>
            <BusinessFundingDialog open={open} onClose={() => setOpen(false)} />

            <Button
                ref={buttonRef}
                variant="secondary"
                onClick={() => setOpen(true)}
            >
                Open Dialog
            </Button>
        </main>
    )
}

export default App

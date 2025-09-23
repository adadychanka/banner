import { useState } from 'react'
import styles from './App.module.css'
import BusinessFundingBannerDialog from './features/BusinessFundingBannerDialog/BusinessFundingBannerDialog'
import Button from './components/Button/Button'

function App() {
    const [open, setOpen] = useState(true)

    return (
        <main className={styles.app}>
            <BusinessFundingBannerDialog
                open={open}
                onClose={() => setOpen(false)}
            />

            {!open && (
                <Button variant="secondary" onClick={() => setOpen(true)}>
                    Open Dialog
                </Button>
            )}
        </main>
    )
}

export default App

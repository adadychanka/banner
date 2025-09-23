import styles from './App.module.css'
import BusinessFundingBanner from './features/BusinessFundingBanner/BusinessFundingBanner'

function App() {
    return (
        <main className={styles.app}>
            <BusinessFundingBanner />
        </main>
    )
}

export default App

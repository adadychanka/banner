import styles from './App.module.css'
import Banner from './components/Banner/Banner'

function App() {
    return (
        <main className={styles.app}>
            <Banner
                title="Get the Business Funding You Need"
                content={<p>Banner</p>}
                actions={<button>Click me</button>}
            />
        </main>
    )
}

export default App

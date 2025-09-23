import './App.css'
import Banner from './components/Banner/Banner'

function App() {
    return (
        <main className="app-container">
            <Banner
                title="Get the Business Funding You Need"
                content={<p>Banner</p>}
            />
        </main>
    )
}

export default App

import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer"
import InfosBlock from "@/components/InfosBlock/InfosBlock"
import "./page.scss"

export default function Home() {
    return (
        <main>
            <BackgroundLayer />
            <div className="app-container">
                <h1>Air Quality App</h1>
                <InfosBlock />
            </div>
        </main>
    )
}

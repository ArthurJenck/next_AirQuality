"use client"
import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer"
import InfosBlock from "@/components/InfosBlock/InfosBlock"
import "./page.scss"
import { useEffect, useState } from "react"
import pollutionScale from "@/data/pollutionScale.json"

export interface cityDataProps {
    cityData: {
        city?: string
        aqi?: number
        scale?: number[] | undefined
        quality?: string | undefined
        src?: string | undefined
        background?: string
    }
    city?: string
    aqi?: number
    scale?: number[] | undefined
    quality?: string | undefined
    src?: string | undefined
    background?: string
}

export default function Home() {
    const [cityData, setCityData] = useState({})

    const getPollutionData = async () => {
        try {
            const fetchedData = await fetch(
                "http://api.airvisual.com/v2/nearest_city?key=45e8a9a0-ba85-411b-a0d8-4a1cfc00e42b"
            ).then((res) => res.json())

            const aqi = await fetchedData.data.current.pollution.aqius
            setCityData({
                city: fetchedData.data.city,
                aqi,
                ...pollutionScale.find(
                    (obj) => aqi >= obj.scale[0] && aqi <= obj.scale[1]
                ),
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPollutionData()
    }, [])

    return (
        <main>
            <BackgroundLayer cityData={cityData} />
            <div className="app-container">
                <h1>Air Quality App</h1>
                <InfosBlock cityData={cityData} />
            </div>
        </main>
    )
}

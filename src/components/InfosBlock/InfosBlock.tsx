"use client"
import React, { Suspense, useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import InfosTable from "../InfosTable/InfosTable"
import InfosHeader from "../InfosHeader/InfosHeader"
import Scale from "../Scale/Scale"
import "./InfosBlock.scss"
import pollutionScale from "@/data/pollutionScale.json"

export interface cityDataProps {
    cityData: {
        city?: string
        aqi?: number
        scale?: number[] | undefined
        quality?: string | undefined
        src?: string | undefined
        background?: string | undefined
    }
    city?: string
    aqi?: number
    scale?: number[] | undefined
    quality?: string | undefined
    src?: string | undefined
    background?: string | undefined
}

const InfosBlock = () => {
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
        <div className="infos-block">
            <Suspense fallback={<Loader />}>
                <InfosHeader cityData={cityData} />
                <InfosTable cityData={cityData} />
                <Scale cityData={cityData} />
            </Suspense>
        </div>
    )
}

export default InfosBlock

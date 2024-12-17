import React, { useEffect, useRef } from "react"
import "./BackgroundLayer.scss"
import { cityDataProps } from "@/app/page"

const BackgroundLayer = ({ cityData }: cityDataProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ref.current!.style.backgroundImage = `${cityData.background}`
    }, [cityData.background])

    return <div className="background-layer" ref={ref}></div>
}

export default BackgroundLayer

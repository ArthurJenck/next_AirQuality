import Image from "next/image"
import React, { useEffect, useRef } from "react"
import pointer from "@/../public/location.svg"
import "./Scale.scss"
import { cityDataProps } from "../InfosBlock/InfosBlock"

const Scale = ({ cityData }: cityDataProps) => {
    const ref = useRef<HTMLImageElement>(null)

    useEffect(() => {
        ref.current!.style.left = `calc(${cityData.aqi}% * 100 / 500 - 1rem)`
    }, [cityData.aqi])

    return (
        <div className="scale">
            <p>Pollution scale :</p>
            <div className="scale-bar">
                <Image src={pointer} alt="pointer icon" ref={ref} />
                <div className="scale-section"></div>
                <div className="scale-section"></div>
                <div className="scale-section"></div>
                <div className="scale-section"></div>
                <div className="scale-section"></div>
                <div className="scale-section"></div>
            </div>
        </div>
    )
}

export default Scale

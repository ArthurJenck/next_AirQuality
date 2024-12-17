import Image from "next/image"
import React from "react"
import pointer from "@/../public/location.svg"
import "./Scale.scss"
import { cityDataProps } from "../InfosBlock/InfosBlock"

const Scale = ({ cityData }: cityDataProps) => {
    console.log(cityData)

    return (
        <div className="scale">
            <p>Pollution scale :</p>
            <div className="scale-bar">
                <Image src={pointer} alt="pointer icon" />
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

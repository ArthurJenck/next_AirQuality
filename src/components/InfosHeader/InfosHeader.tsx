import React, { useEffect, useState } from "react"
import Image from "next/image"
import loupeIcon from "@/../public/magnifying-glass.svg"
import happyIcon from "@/../public/happy.svg"
import thinkingIcon from "@/../public/thinking.svg"
import unhealthyIcon from "@/../public/unhealthy.svg"
import badIcon from "@/../public/bad.svg"
import maskIcon from "@/../public/mask.svg"
import terribleIcon from "@/../public/terrible.svg"

import "./InfosHeader.scss"
import { cityDataProps } from "../InfosBlock/InfosBlock"

const InfosHeader = ({ cityData }: cityDataProps) => {
    const [feelingIcon, setFeelingIcon] = useState(loupeIcon)

    useEffect(() => {
        switch (cityData.src) {
            case "happy":
                setFeelingIcon(happyIcon)
                break
            case "thinking":
                setFeelingIcon(thinkingIcon)
                break
            case "unhealthyIcon":
                setFeelingIcon(unhealthyIcon)
                break
            case "bad":
                setFeelingIcon(badIcon)
                break
            case "mask":
                setFeelingIcon(maskIcon)
                break
            case "terrible":
                setFeelingIcon(terribleIcon)
                break

            default:
                break
        }
    }, [cityData.src])

    return (
        <div className="infos-header">
            <Image
                src={feelingIcon}
                alt="feeling icon"
                height={100}
                width={100}
            />
            <p>Here are the {cityData.city} informations.</p>
        </div>
    )
}

export default InfosHeader

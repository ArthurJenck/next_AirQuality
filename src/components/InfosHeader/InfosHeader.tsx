import React from "react"
import Image from "next/image"
import loupeIcon from "@/../public/magnifying-glass.svg"
import "./InfosHeader.scss"

const InfosHeader = () => {
    return (
        <div className="infos-header">
            <Image src={loupeIcon} alt="feeling icon" />
            <p>Here is your city information.</p>
        </div>
    )
}

export default InfosHeader

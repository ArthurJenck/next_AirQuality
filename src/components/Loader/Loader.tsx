import Image from "next/image"
import loadingIcon from "../../../public/biodegradable.svg"
import React from "react"
import "./Loader.scss"

const Loader = () => {
    return (
        <div className="loader active">
            <Image src={loadingIcon} alt="loading air data" />
        </div>
    )
}

export default Loader

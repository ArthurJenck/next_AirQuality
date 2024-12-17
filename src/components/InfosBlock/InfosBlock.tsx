import React, { Suspense } from "react"
import Loader from "../Loader/Loader"
import InfosTable from "../InfosTable/InfosTable"
import InfosHeader from "../InfosHeader/InfosHeader"
import Scale from "../Scale/Scale"
import "./InfosBlock.scss"
import { cityDataProps } from "@/app/page"

const InfosBlock = ({ cityData }: cityDataProps) => {
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

import React, { Suspense } from "react"
import Loader from "../Loader/Loader"
import InfosTable from "../InfosTable/InfosTable"
import InfosHeader from "../InfosHeader/InfosHeader"
import Scale from "../Scale/Scale"
import "./InfosBlock.scss"

const InfosBlock = () => {
    return (
        <div className="infos-block">
            <Suspense fallback={<Loader />}>
                <InfosHeader />
                <InfosTable />
                <Scale />
            </Suspense>
        </div>
    )
}

export default InfosBlock

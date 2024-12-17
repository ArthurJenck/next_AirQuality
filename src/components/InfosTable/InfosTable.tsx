import React from "react"
import "./InfosTable.scss"
import { cityDataProps } from "../InfosBlock/InfosBlock"

const InfosTable = ({ cityData }: cityDataProps) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>City</th>
                    <td className="city-name">{cityData.city}</td>
                </tr>
                <tr>
                    <th>Pollution info</th>
                    <td className="pollution-info">{cityData.quality}</td>
                </tr>
                <tr>
                    <th>Air Quality Index</th>
                    <td className="pollution-value">{cityData.aqi}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default InfosTable

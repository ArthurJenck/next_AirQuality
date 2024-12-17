import React from "react"
import "./InfosTable.scss"

const InfosTable = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>City</th>
                    <td className="city-name">...</td>
                </tr>
                <tr>
                    <th>Pollution info</th>
                    <td className="pollution-info">...</td>
                </tr>
                <tr>
                    <th>Air Quality Index</th>
                    <td className="pollution-value">...</td>
                </tr>
            </tbody>
        </table>
    )
}

export default InfosTable

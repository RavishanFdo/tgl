import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const DisabledVehicles = ({vehicles}) => {
    if (!vehicles.length) return <div><br/><br/><h4>No Disabled Vehicles</h4></div>
    return(
        <div>
            <br/><br/>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th className="center-align">Vehicle No</th>
                    <th className="center-align">Make</th>
                    <th className="center-align">Model</th>
                    <th className="center-align">Trailer No</th>
                    <th className="center-align">Purchased Date</th>
                    <th className="center-align">Engine Number</th>
                    <th className="center-align">Actions</th>
                </tr>
                </thead>
                <tbody>
                {vehicles && vehicles.map(vehicle =>{
                    return(
                        <tr key={vehicle.id}>
                            <td className="center-align">{vehicle.vehicleNo}</td>
                            <td className="center-align">{vehicle.make}</td>
                            <td className="center-align">{vehicle.model}</td>
                            <td className="center-align">{vehicle.trailerNo}</td>
                            <td className="center-align">{vehicle.purchasedDate}</td>
                            <td className="center-align">{vehicle.engineNo}</td>
                            <td className="center-align">
                                <Link to={'/admin/vehicles/' + vehicle.id}><button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" data-target="#edit">View</button></Link>
                            </td>
                        </tr> 
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}




export default DisabledVehicles
import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const DisabledDrivers = ({drivers}) => {
    if (!drivers.length) return <div><br/><br/><h4>No Disabled Drivers</h4></div>
    return(
        <div>
            <br/><br/>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th className="center-align">Name</th>
                    <th className="center-align">License No</th>
                    <th className="center-align">NIC</th>
                    <th className="center-align">Mobile</th>
                    <th className="center-align">User Since</th>
                    <th className="center-align">Actions</th>
                </tr>
                </thead>
                <tbody>
                {drivers && drivers.map(driver => {
                    return (
                        <tr key={driver.id}>
                            <td className="center-align">{driver.firstName + ' ' + driver.lastName}</td>
                            <td className="center-align">{driver.licenseNo}</td>
                            <td className="center-align">{driver.nic}</td>
                            <td className="center-align">{driver.mobile}</td>
                            <td className="center-align">{moment(driver.createdAt.toDate()).format("MMM Do YYYY")}</td>
                            <td className="center-align">
                                <Link to={"/admin/drivers/" + driver.id}><button type="button" data-toggle="modal" data-id="" class="edit-details btn btn-primary" data-target="#edit">View</button></Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}




export default DisabledDrivers
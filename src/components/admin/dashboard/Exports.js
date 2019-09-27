import React from 'react'
import {Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Exports = ({exportHires}) => {
    return(
            <div>
                <br/><br/>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>Type</th>
                        <th>Pickup Date</th>
                        <th>Cargo Type</th>
                        <th>Loading Date</th>
                        <th>Driver</th>
                        <th>Customer</th>
                        <th>Vehicle</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {exportHires && exportHires.map(exp =>{
                            return (
                                <tr key={exp.id}>
                                <td className="center-align">{exp.containerType}</td>
                                <td className="center-align">{exp.pickupDatetime.seconds}</td>
                                <td className="center-align">{exp.cargoType}</td>
                                <td className="center-align">{exp.loadingDatetime.seconds}</td>
                                <td className="center-align">{exp.driverId}</td>
                                <td className="center-align">{exp.customerId}</td>
                                <td className="center-align">{exp.vehicleId}</td>
                                <td className="center-align">{exp.hireStatus === "completed" ? <Badge variant="success" className="black-text">Completed</Badge> : (
                                    exp.hireStatus === "request" ? <Badge variant="primary" className="black-text">Request</Badge> : (
                                        exp.hireStatus === "driverPending" ? <Badge variant="danger" className="black-text">Pending</Badge> : <Badge variant="warning" className="black-text">Ongoing</Badge>
                                    )
                                    )}
                                </td>
                                <td className="center-align">
                                    <Link to={'/admin/hires/' + exp.id}><button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" data-target="#edit">View</button></Link>
                                </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    )
}

export default Exports
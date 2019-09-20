import React from 'react'
import {Badge} from 'react-bootstrap'

const ImportRequests = ({importHireRequests}) => {
    if (!importHireRequests) return <div><br/><br/><h4>No Import Requests</h4></div>
    return(
        <div>
            <br/><br/>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th>Type</th>
                    <th>Pickup Date</th>
                    <th>Cargo Type</th>
                    <th>Vessel Arrival Date</th>
                    <th>Destination</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {importHireRequests && importHireRequests.map(imp =>{
                        return(
                            <tr key={imp.id}>
                                <td className="center-align">{imp.containerType}</td>
                                <td className="center-align">{imp.pickupDatetime.seconds}</td>
                                <td className="center-align">{imp.cargoType}</td>
                                <td className="center-align">{imp.vesselArrivalDatetime.seconds}</td>
                                <td className="center-align">{imp.destination}</td>
                                <td className="center-align">{imp.customerId}</td>
                                <td className="center-align"><Badge variant="primary" className="black-text">Request</Badge></td>
                                <td className="center-align">
                                    <button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" data-target="#edit">View</button>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}




export default ImportRequests
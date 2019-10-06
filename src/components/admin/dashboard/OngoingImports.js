import React from 'react'
import {Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'

const OngoingImports = ({ongoingImportHires}) => {
    if (!ongoingImportHires.length) return <div><br/><br/><h4>No Ongoing Imports</h4></div>
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
                    <th>Driver</th>
                    <th>Customer</th>
                    <th>Vehicle</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {ongoingImportHires && ongoingImportHires.map(imp =>{
                        return(
                            <tr key={imp.id}>
                                <td className="center-align">{imp.containerType}</td>
                                <td className="center-align">{moment(imp.pickupDatetime).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                <td className="center-align">{imp.cargoType}</td>
                                <td className="center-align">{moment(imp.vesselArrivalDatetime).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                <td className="center-align">{imp.destination}</td>
                                <td className="center-align">{imp.driverName}</td>
                                <td className="center-align">{imp.customerName}</td>
                                <td className="center-align">{imp.vehicleId}</td>
                                <td className="center-align"><Badge variant="warning" className="black-text">Ongoing</Badge></td>
                                <td className="center-align">
                                    <Link to={'/admin/hires/' + imp.id}><button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" >View</button></Link>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}




export default OngoingImports
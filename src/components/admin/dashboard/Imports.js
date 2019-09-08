import React from 'react'
import {Badge} from 'react-bootstrap'

const Imports = ({importHires}) => {
    // console.log(importHires)
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
                    {importHires && importHires.map(imp =>{
                        return(
                            <tr>
                            <td className="center-align">{imp.containerType}</td>
                            <td className="center-align">12-12-12</td>
                            <td className="center-align">{imp.cargoType}</td>
                            <td className="center-align">12-12-12</td>
                            <td className="center-align">{imp.destination}</td>
                            <td className="center-align">{imp.driver}</td>
                            <td className="center-align">paul walker</td>
                            <td className="center-align">ly123</td>
                            <td className="center-align"><Badge variant="success">Completed</Badge></td>
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




export default Imports
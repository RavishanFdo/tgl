import React from 'react'
import {Badge} from 'react-bootstrap'

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
                                <tr>
                                <td className="center-align">{exp.containerType}</td>
                                <td className="center-align">12-12-12</td>
                                <td className="center-align">{exp.cargoType}</td>
                                <td className="center-align">{exp.loadingPort}</td>
                                <td className="center-align">vin diesel</td>
                                <td className="center-align">{exp.driver}</td>
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

export default Exports
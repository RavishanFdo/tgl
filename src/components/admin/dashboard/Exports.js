import React from 'react'
import {Badge} from 'react-bootstrap'

const Exports = () => {
    return(
            <div>
                <br/><br/>
                <table class="table">
                    <thead class="thead-dark">
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
                        <tr>
                        <td className="center-align">20</td>
                        <td className="center-align">12-12-12</td>
                        <td className="center-align">Copper</td>
                        <td className="center-align">Colombo</td>
                        <td className="center-align">vin diesel</td>
                        <td className="center-align">paul walker</td>
                        <td className="center-align">ly123</td>
                        <td className="center-align"><Badge variant="success">Completed</Badge></td>
                        <td className="center-align">
                            <button type="button" data-toggle="modal" data-id="" class="edit-details btn btn-primary" data-target="#edit">View</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default Exports
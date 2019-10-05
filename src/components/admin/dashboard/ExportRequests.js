import React from 'react'
import {Badge} from 'react-bootstrap'
import moment from 'moment'
import {Link} from 'react-router-dom'

const ExportRequests = ({exportHireRequest}) => {
    if (!exportHireRequest) return <div><br/><br/><h4>No Export Requests</h4></div>
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
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {exportHireRequest && exportHireRequest.map(exp =>{
                        return (
                            <tr key={exp.id}>
                            <td className="center-align">{exp.containerType}</td>
                            <td className="center-align">{moment(exp.pickupDatetime).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td className="center-align">{exp.cargoType}</td>
                            <td className="center-align">{moment(exp.loadingDatetime).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td className="center-align">{exp.customerName}</td>
                            <td className="center-align"><Badge variant="primary" className="black-text">Request</Badge></td>
                            <td className="center-align">
                                <Link to={'/admin/hires/' + exp.id}><button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" >View</button></Link>
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExportRequests 
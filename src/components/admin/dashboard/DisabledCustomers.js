import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const DisabledCustomers = ({customers}) => {
    if (!customers.length) return <div><br/><br/><h4>No Disabled Customers</h4></div>
    return(
        <div>
            <br/><br/>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th className="center-align">Name</th>
                    <th className="center-align">Email</th>
                    <th className="center-align">Mobile</th>
                    <th className="center-align">NIC</th>
                    <th className="center-align">User Since</th>
                    <th className="center-align">Actions</th>
                </tr>
                </thead>
                <tbody>
                {customers && customers.map(customer => {
                    return(
                        <tr key={customer.id}>
                            <td className="center-align">{customer.firstName + ' ' + customer.lastName}</td>
                            <td className="center-align">{customer.email}</td>
                            <td className="center-align">{customer.mobile}</td>
                            <td className="center-align">{customer.nic}</td>
                            <td className="center-align">{moment(customer.createdAt.toDate()).format("MMM Do YYYY")}</td>
                            <td className="center-align">
                                <Link to={'/admin/customers/' + customer.id}><button type="button" data-toggle="modal" data-id="" class="edit-details btn btn-primary" data-target="#edit">View</button></Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}




export default DisabledCustomers
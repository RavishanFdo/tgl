import React from 'react'

const Customers = () => {
    return(
        <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <br/><br/>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Username</th>
                        <th>User Since</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" data-toggle="modal" data-id="" class="edit-details btn btn-primary" data-target="#edit">View</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Customers
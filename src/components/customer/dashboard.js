import React from 'react' 
import {Link} from 'react-router-dom'
import CustHome from './custHome'

const hStyle = {
    fontSize: '64px',
    margin:'40px'
}

class Dashboard extends React.Component{
    
    render(){
        return(
            <div >
                <br/><br/>

                <h3 className="display-4 text-center" style={ hStyle}><strong> Welcome to Trans Global Logistics </strong></h3>
                <hr className="bg-dark mb-4 w-25"/>
                <br/><br/>
                <div className='row container'style={{margin: ' 0 auto'}} >
                    <div className="col" >
                            <div className="card" >
                                <div className="card-body">
                                <img className="card-img-top" src={require('../../img/import.png')} alt="Card cap"/>
                                <hr/>
                                <h5 className="card-title">Add Your Hire Here</h5>
                                <p className="card-text"><Link to='/cust/addHire'><button className="btn">ADD HIRE</button> </Link></p>
                                </div>
                            </div>
                    </div>
                    <div className="col" >
                        <div className="card" >
                            <div className="card-body">
                            <img className="card-img-top" src={require('../../img/manage.png')} alt="Card cap"/>
                            <hr/>
                            <h5 className="card-title">Manage Your Hires Here</h5>
                            <p className="card-text"><Link to='/'><button className="btn ">Manage Hires</button></Link></p>
                            </div>
                        </div>
                 </div>
            </div>
               
            <CustHome/>
            </div>
        )
    }
}
export default Dashboard;
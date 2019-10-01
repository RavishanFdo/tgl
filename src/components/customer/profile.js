import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'


const imgStyle={
    borderRadius:'50%',
    height:'150px',
    width:'150px',
}
const Profile =(props)=>{

        return(
            <div className='container'>
                 <br/><br/><br/><br/>
                 <br/><br/><br/><br/>
                <div className='row'>
                    
                    <div className='col'> 
                        <div className="col" >
                                <div className="card" >
                                    <div className="card-body">
                                    <img className="card-img-top " src={require('../../img/userimg.png')} alt="Card cap" style={ imgStyle}/>
                                    <p className="card-text text-right">
                                        <Link to='/cust/addHire'><button className="btn btn-info">Edit Profile</button> </Link>
                                        <Button onClick={props.signOut}>Logout</Button></p>
                                    </div>
                            </div>
                        </div>

                    </div>
                   
                    <div className='col'> 
                        <div className="col" >
                                <div className="card" >
                                    <div className="card-body">
                                    <img className="card-img-top " src={require('../../img/sms.jpg')} alt="Card cap" style={ imgStyle}/>
                                    <p className="card-text text-right"><Link to='/cust/addHire'><button className="btn btn-info">View Messages</button> </Link></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                  </div> 
            </div>
        )
  
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(Profile);

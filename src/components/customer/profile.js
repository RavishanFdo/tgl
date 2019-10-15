import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import image from '../../img/importreq.jpg'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const imgStyle={
    borderRadius:'50%',
    height:'150px',
    width:'150px',
}
const rowStyle={
    margin:'0',
    paddingBottom:'0',
    backgroundColor:'red'
}
const hStyle = {
    fontSize: '64px',
    margin:'40px',
    textDecoration:'none',
    color:'black'
}

class Profile extends React.Component {
   render(){
       const {auth,customers} = this.props
      
    return(
        // <div style={{backgroundImage:"url("+image+")" }}>
        <div className='container'>
            <br/><br/><br/><br/>
                    
           <div className='row ' >
            <hr/><hr/>
           <div className='col '>
          
                            <Card className='bg-dark' style={{color:'white'}}>
                                <Card.Body><Link style={{color:'white'}} to={'/cust/profile/' + auth.uid}>Edit Profile</Link></Card.Body>
                                <Card.Body><Link style={{color:'white'}} to={'/cust/profile/resetPassword'}>Change Password</Link></Card.Body>
                                <Card.Body><Link style={{color:'white'}}>View Messages</Link></Card.Body>
                                <Card.Body><Link style={{color:'white'}}>Manage Hires</Link></Card.Body>

                            </Card>
                            
                        </div>

                       <div className="col" >
                           <div className="card" >
                               <div className="card-body">
                               <img className="card-img-top " src={require('../../img/userimg.png')} alt="Card cap" style={ imgStyle}/>
                               <p className="card-text text-right" >
                                   {/* <div style={{hStyle}}>Edit your profile and change your settings</div><br/> */}
                               <Link to={'/cust/profile/' + auth.uid}>
                                   <button  style ={{alignContent:'right'}} type="button" data-toggle="modal" data-id="" class="edit-details btn btn-info" data-target="#edit">Edit Profile</button></Link>
                               </p>
                               </div>
                           </div>
                       </div>
                      
                        <div className="col" >
                                <div className="card" >
                                    <div className="card-body">
                                    <img className="card-img-top " src={require('../../img/sms.jpg')} alt="Card cap" style={ imgStyle}/>
                                    <p className="card-text text-right"><Link to=''><button className="btn btn-info">View Messages</button> </Link></p>
                                    </div>
                                </div>
                        </div>
                </div> 
            </div>
            // </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        auth: state.firebase.auth,
        customers: state.firestore.ordered.customers
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'customers'}
    ])
)(Profile)

import React from 'react'
import {connect} from 'react-redux'
import { Card} from 'react-bootstrap'



const adminStyle ={
    backgroundColour:' #a7ead0 '

}
const custStyle ={
    backgroundColour:' #a7ead0 ',
    colour:'',
    textAlign:'right'
}

class MsgContent extends React.Component {

    render(){
        const {auth,messages,type} = this.props
        let name= auth.uid && type.userType === 'admin' ? 'Admin' : 'You' ;
        let cardStyle = name==='Admin' ? adminStyle :custStyle;
        let msg = (auth.uid === messages.from || auth.uid == messages.to) ? messages.content : null
       
        return(
               <Card className='card' bg="dark" text='white' style={{   
                textAlign:'right',
                backgroundColour:' green ',
                padding:'10px',
                opacity:'0.6',
                borderRadius:'8%',
                fontSize:'0.9em'
                 }}>
                <Card.Body>
                {/* <span className='card-title' > */}
                    {messages.content}
                              
                    {/* {(auth.uid === messages.from || auth.uid == messages.to) ? 
                    <p style={{fontSize:'20px'}}>{messages.content}</p> :} */}
                    {/* </span> */}
                </Card.Body>
            </Card>
             
        )
    }

}
const mapStateToProps=(state)=>{
    console.log(state);
    return{
        auth: state.firebase.auth,
        type: state.firebase.profile
    }
}
export default connect(mapStateToProps)(MsgContent);
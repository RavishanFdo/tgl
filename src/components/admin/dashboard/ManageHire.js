import React, {Component} from 'react'
import "react-tabs/style/react-tabs.css";
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import ManageCompletedHires from './ManageCompletedHires'
import ManageHireRequest from './ManageHireRequest'


class ManageHire extends Component {

    static defaultProps = { // <-- DEFAULT PROPS
        hire: []       
    }

    state = {
        load: 1
    }

    componentWillReceiveProps(nextProps) {
        
        if(this.props.hire){
            this.setState({
                // ...nextProps.hire[0],
                load: 0,
            });
        }
        
    }

    render() {

        // const {auth, id, hire} = this.props
        // const hire = 


        // const load = this.state.load === 0 && this.props.hire.filter(item => item.hireType === "completed" && item.id === this.props.id) ? (
        //     <div>
        //         <ManageCompletedHires hire={this.props.hire.filter(item => item.id === this.props.id)}></ManageCompletedHires>
        //     </div>
            
        // ) : 
        //     <div id="content" className="container-fluid" role="main">
        //         <ManageHireRequest hire={this.props.hire.filter(item => item.id === this.props.id)}></ManageHireRequest>
        //     </div>

        // return <div>{load}</div>

        const load = this.state.load === 0 ? (
            this.props.hire.filter(item => item.id === this.props.id ).map(a => a.hireStatus)[0] === "completed" ?  (
                <div>
                    <ManageCompletedHires hire={this.props.hire.filter(item => item.id === this.props.id)}></ManageCompletedHires>
                </div>
                
            ) : 
                <div id="content" className="container-fluid" role="main">
                    <ManageHireRequest hire={this.props.hire.filter(item => item.id === this.props.id)}></ManageHireRequest>
                </div>
        ) : null

        return <div>{load}</div>

        
    }
}

const mapStateToProps = (state, ownProps) => {
    
    let id = ownProps.match.params.id;
    return{
        auth: state.firebase.auth,
        id: id,
        hire: state.firestore.ordered.hires,
    }
    
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [{
        collection: 'hires',
        // doc: props.id,
    }])
)(ManageHire)
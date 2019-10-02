import React, {Component} from 'react'
import "react-tabs/style/react-tabs.css";
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import ManageCompletedHires from './ManageCompletedHires'


class ManageHire extends Component {

    static defaultProps = { // <-- DEFAULT PROPS
        hire: []       
    }

    state = {
        loading: 1
    }

    componentWillReceiveProps(nextProps) {
        
        if(this.props.hire){
            this.setState({
                ...nextProps.hire[0],
                loading: 0,
            });
        }
        
    }

    render() {

        const {auth, id, hire} = this.props
        // if (!auth.uid) return <Redirect to='/signin' />

        const load = this.state.loading === 0 && this.state.hireStatus === "completed" ? (
            <div>
                <ManageCompletedHires hire={this.props.hire[0]}></ManageCompletedHires>
            </div>
            
        ) : this.state.loading === 0 && this.state.hireStatus === "requested" ? (
            <div>

            </div>
        ) : this.state.loading === 0 && this.state.hireStatus === "ongoing" ? (
            <div>

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
        doc: props.id,
    }])
)(ManageHire)
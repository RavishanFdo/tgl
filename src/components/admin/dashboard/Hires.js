import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Exports from './Exports'
import Imports from './Imports'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


class Hires extends Component {
    static defaultProps = { // <-- DEFAULT PROPS
        hires: []       
    }
    
    render() {
        const importHires = this.props.hires.filter(item => item.hireType == "import")
        const exportHires = this.props.hires.filter(item => item.hireType == "export")
        // console.log(importHires)
        return (
        <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <br/><br/>
                <Tabs className="center">
                    <TabList>
                        <Tab>IMPORTS</Tab>
                        <Tab>EXPORTS</Tab>
                    </TabList>
                    <TabPanel>
                        <Imports importHires={importHires}></Imports>
                    </TabPanel>
                    <TabPanel>
                        <Exports exportHires={exportHires}></Exports>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        hires: state.firestore.ordered.hires
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'hires'}
    ])
)(Hires)
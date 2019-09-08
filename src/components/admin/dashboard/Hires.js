import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Exports from './Exports'
import Imports from './Imports'
import {connect} from 'react-redux'

class Hires extends Component {
    
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
    return {
        hires: state.hire.hires
    }
}

export default connect(mapStateToProps)(Hires)
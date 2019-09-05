import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Exports from './Exports'
import Imports from './Imports'

class Hire extends Component {
    
    render() {
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
                        <Imports></Imports>
                    </TabPanel>
                    <TabPanel>
                        <Exports></Exports>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        )
    }
}

export default Hire
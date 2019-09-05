import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AddExport from './AddExport'
import AddImport from './AddImport'

class AddHire extends Component {
    
    render() {
        return (
            <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <br/><br/>
                <Tabs className="container center">
                    <TabList>
                        <Tab>IMPORT</Tab>
                        <Tab>EXPORT</Tab>
                    </TabList>
                    <TabPanel>
                        <AddImport></AddImport>
                    </TabPanel>
                    <TabPanel>
                        <AddExport></AddExport>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        )
    }
}

export default AddHire;
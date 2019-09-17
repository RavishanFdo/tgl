import React from 'react'
import StatCard from '../stats/StatCard'
import Card from '../stats/Card'
import ChartistGraph from "react-chartist";
import {Row, Col } from "react-bootstrap";
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

var data = {
    labels: [
      "9:00AM",
      "12:00AM",
      "3:00PM",
      "6:00PM",
      "9:00PM",
      "12:00PM",
      "3:00AM",
      "6:00AM"
    ],
    series: [
      [287, 385, 490, 492, 554, 586, 698, 695],
      [67, 152, 143, 240, 287, 335, 435, 437],
      [23, 113, 67, 108, 190, 239, 307, 308]
    ]
  };

  var optionsSales = {
    low: 0,
    high: 800,
    showArea: false,
    height: "245px",
    axisX: {
      showGrid: false
    },
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
      right: 50
    }
  };

const AdminDashboard = (props) => {
    const {auth} = props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        // <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <div className="">
                    <div style={{paddingTop:'70px'}}>
                        <h2>This Month</h2>
                    </div>
                    <StatCard></StatCard>
                    <br/><br/>
                    <h2>Performance</h2>
                    <Row>
                        <Col md={12}>
                        <Card
                            statsIcon="fa fa-history"
                            id="chartHours"
                            title="Imports and Exports"
                            category=""
                            stats="Updated 3 minutes ago"
                            content={
                            <div className="ct-chart">
                                <ChartistGraph
                                data={data}
                                type="Line"
                                options={optionsSales}
                                responsiveOptions=''
                                />
                            </div>
                            }
                            legend=''
                        />
                        </Col>
                    </Row>
                </div>
            </div>
        // </div>
    )
}

const mapStateToProps = (state) => {
  return{
      auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(AdminDashboard)
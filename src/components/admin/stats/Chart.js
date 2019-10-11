import React, {Component} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


class Chart extends Component {
  static defaultProps = {
      hires: []       
  }

  

  render(){
    const options = {
      title: {
        text: 'Imports And Exports'
      },
      yAxis: {
        title: {
            text: 'Number of Hires'
        }
      },
      xAxis: {
        // categories: mon,
      },
      plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
      },
      series: [
        // { name: 'imports', type: 'line', data: num},
        {
          allowPointSelect: true,
          point: {
            events: {}
          },
          data: [],
          type: "line"
        }
        // {type: 'line', data: importHires}
      ],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
      }
    }

    const importHires = this.props.hires
    const exportHires = this.props.hires.filter(item => item.hireType === "export" && (item.hireStatus === "completed"))
    

    var group_imports_to_months = importHires.reduce(function (obj, item) {
      obj[(new Date(item.pickupDatetime)).getMonth()] = obj[(new Date(item.pickupDatetime)).getMonth()] || []; 
      obj[(new Date(item.pickupDatetime)).getMonth()].push(item.id);
      return obj;
    }, {});

    var group_exports_to_months = exportHires.reduce(function (obj, item) {
      obj[item.pickupDatetime] = obj[item.pickupDatetime] || []; 
      obj[item.pickupDatetime].push(item.id);
      return obj;
    }, {});


  var imports = Object.entries(group_imports_to_months).sort()
  var exports = Object.entries(group_exports_to_months).map(([pickupDatetime, id]) => ({ pickupDatetime, id }));
  
  console.log("huraaay",imports)
  // options.series[0].date.push(imports[0])

  let newData = []
  for(var i=0;i<imports.length;i++){
    newData.push({
      x: imports[i][0],
      y: imports[i][1]
    });
  }
  options.series[0].data = newData;


    

    return(
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
      hires: state.firestore.ordered.hires
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'hires'}
  ])
)(Chart)


import React, { Component } from "react";

export class StatCard extends Component {
  render() {
    return (
      <div className="row container-fluid" >
          <div className="col-lg-4"><a href="/">
            <div className="card-counter primary">
                <i className="fa fa-clock"></i>
                <span className="count-numbers">0</span>
                <span className="count-name">Ongoing Hires</span>
            </div></a>
        </div>
        <div className="col-lg-4">
            <div className="card-counter danger">
                <i className="fa fa-truck"></i>
                <span className="count-numbers">0</span>
                <span className="count-name">Completed Hires</span>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card-counter info">
                <i className="fa fa-users"></i>
                <span className="count-numbers">0</span>
                <span className="count-name">New Customers</span>
            </div>
        </div>
      </div>
    );
  }
}

export default StatCard;
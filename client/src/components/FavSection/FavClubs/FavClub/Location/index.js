import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <h5 className="location">LOCATION:</h5>
        </div>
        <div className="col-8">
          <h6 className="location-content">Starbucks on 5th</h6>
        </div>
        <div className="row" />
        <div className="col-4">
          <h5 className="members">IN THE CLUB:</h5>
        </div>
      </div>
    );
  }
}

export default Location;

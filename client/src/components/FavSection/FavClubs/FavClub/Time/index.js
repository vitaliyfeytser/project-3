import React, { Component } from  "react";

class Time extends Component{

    render(){
      return(
        <div className="row">
            <div className="col-4">
                <h5 className="day">DAY:</h5>
            </div>
            <div className="col-8">
                <h6 className="day-content">Fridays @ 7pm</h6>
            </div>
        </div>
      )
    }
              
}

export default Time;
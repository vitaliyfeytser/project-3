import React, { Component } from "react";
import Time from "./Time";
import Location from "./Location";
import Members from "./Members/Member";

class FavClub extends Component {
  /*Need to break up further*/

  render() {
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="./images/hb.jpeg"
              className="card-img"
              alt="Action Bible"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-0">
                THE ACTION BIBLE
                <img
                  className="ml-3"
                  src="./images/check.png"
                  alt="You're A Member Of This Book Club"
                  width="20px"
                  height="20px"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="You're A Member Of This Book Club!"
                />
                <img
                  className="ml-1"
                  src="./images/flame.png"
                  alt="LEAVE This Book Club!"
                  width="20px"
                  height="20px"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="LEAVE This Book Club!"
                />
                <img
                  className="ml-1"
                  src="./images/heart.png"
                  alt="Fav It For Later!"
                  width="20px"
                  height="20px"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Fav It For Later!"
                />
              </h5>
            </div>
            <Time />

            <Location />
          </div>
          <Members />
        </div>
      </div>
    );
  }
}

export default FavClub;

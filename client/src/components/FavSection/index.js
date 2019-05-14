import React, { Component } from "react";
import FavClubs from "./FavClubs";

class FavSection extends Component{
    render(){
        return(
            <div class="container-fluid" id="accountSection">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="jumbotron jumbotron-profile">
                            <h1 class="display-3">My Current Book Clubs</h1>
                            <p class="lead">Book clubs I'm interested in joining later down the road:</p>
                            <FavClubs />                    
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="jumbotron jumbotron-profile">
                            <h1 class="display-3">My Favs</h1>
                            <p class="lead">Books I'm considering:</p>
                            {/*Add FavBooks Component*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FavSection;
import React, { Component } from "react";
import FavClub from "./FavClub";

class FavClubs extends Component{

    /*Add Method to get all user favorited Clubs*/

    render(){
        /*Loop through Favorited Clubs and Pass to FavClub Component*/
        return(    
            <FavClub />
        )
    }
}

export default FavClubs;
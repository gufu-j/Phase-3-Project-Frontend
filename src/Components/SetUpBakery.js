import React from "react";
import { Link } from "react-router-dom";

function SetUpBakery({name, location, branch, bakeryID}){

    
    // handle delete Function
    function handleClick(bakery){
        console.log(bakery)
    }

return(
    <div className = "Bakery">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        {/* <p>Branch: {branch}</p> */}
        <Link to={`/bakeryBread/${bakeryID}`}>
        <button> Breads</button>
        </Link>
        <button className="remove" onClick={handleClick}> Delete </button>
    </div>
)
}

export default SetUpBakery
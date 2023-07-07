import React from "react";
import { Link } from "react-router-dom";
import EditBox from "./EditBox";


function SetUpBakery({name, location, bakeryID, onDeleteBakery, bakery}){

    
    // handle delete Function
    function handleClick(){
        fetch(`http://localhost:9292/bakeries/${bakeryID}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteBakery(bakery));
    }


return(
    <div className = "Bakery">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        {/* <p>Branch: {branch}</p> */}
        <Link to={`/bakeryBread/${bakeryID}`}>
        <button className="bread-btn"> Breads</button>
        </Link>
        <button className="delete-btn" onClick={handleClick}> Delete </button>
        <EditBox bakeryID={bakeryID}/>
    </div>
    )
}

export default SetUpBakery
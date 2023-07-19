import React from "react";
import { Link } from "react-router-dom";
import EditBox from "./EditBox";


function SetUpBakery({bakery, onDeleteBakery, onUpdatedBakery}){


    
    function handleClick(){
        fetch(`http://localhost:9292/bakeries/${bakery.id}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteBakery(bakery));
    }

return(
    <div className = "Bakery">
        <p>Name: {bakery.name}</p>
        <p>Location: {bakery.location}</p>
        <Link to={`/bakeryBread/${bakery.id}`}>
        <button className="bread-btn"> Breads</button>
        </Link>
        <button className="delete-btn" onClick={handleClick}> Delete </button>
        <EditBox bakery={bakery} onUpdatedBakery= {onUpdatedBakery}/>
    </div>
    )
}

export default SetUpBakery
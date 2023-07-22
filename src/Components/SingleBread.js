import React from "react";

function SingleBread({bName, bType, bPrice}){

    return( 
    <div className="Breads">
        <p>Name:{bName}</p>
        <p>Type:{bType}</p>
        <p>Net Price : $ {bPrice}</p>
        <div>
        <button className="breadDelete"> delete </button>
        </div>
    </div>
    )
}

export default SingleBread
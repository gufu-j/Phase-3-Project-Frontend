import React from "react";

function SingleBread({bread}){

    // function handleDeleteClick() {
    //     fetch(`http://localhost:9292/reviews/${review.id}`, {
    //       method: "DELETE",
    //     })
    //       .then((r) => r.json())
    //       .then((deletedReview) => onDeleteReview(deletedReview));
    //   }

    return( 
    <div className="Breads">
        <p>Name:{bread.name}</p>
        <p>Type:{bread.type_of_bread}</p>
        <p>Net Price : $ {bread.price}</p>
        <div>
        <button className="breadDelete"> delete </button>
        </div>
    </div>
    )
}

export default SingleBread
import React from "react";

function SingleBread({bread, onDeletedBread}){

    function handleDeleteClickBread() {
        console.log("hey it's me right here")
         fetch(`http://localhost:9292/bakeries/:bakery_id/breads/${bread.id}`, {
          method: "DELETE",
        })
           .then((r) => r.json())
           .then((deletedBread) => onDeletedBread(deletedBread));
      }

    return( 
    <div className="Breads">
        <p>Name:{bread.name}</p>
        <p>Type:{bread.type_of_bread}</p>
        <p>Net Price : ${bread.price}</p>
        <div>
        <button onClick = {handleDeleteClickBread} className="breadDelete"> delete </button>
        </div>
    </div>
    )
}

export default SingleBread

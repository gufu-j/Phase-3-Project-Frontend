import React from "react";
import SetUpBakery from "./SetUpBakery";
import BakeriesForm from "./BakeriesForm";

function Bakeries({bakeries, onAddBakery, onDeleteBakery, onUpdatedBakery}){

    let displayBakeries  = bakeries.map((bakery) =>{
        //console.log(bakery)
        return (
            <SetUpBakery
            name = {bakery.name}
            bakeryID = {bakery.id}
            key = {bakery.id}
            location = {bakery.location}
            branch = {bakery.branch}
            onDeleteBakery = {onDeleteBakery}
            onUpdatedBakery = {onUpdatedBakery}
            
            />
        )
    })


    return(
        <div className="Cards">
            <BakeriesForm onAddBakery={onAddBakery}/>
            {displayBakeries}
        </div>
    )

}

export default Bakeries
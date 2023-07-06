import React from "react";
import SetUpBakery from "./SetUpBakery";
import BakeriesForm from "./BakeriesForm";

function Bakeries({bakeries, onAddBakery}){

    let displayBakeries  = bakeries.map((bakery) =>{
        return (
            <SetUpBakery
            name = {bakery.name}
            bakeryID = {bakery.id}
            key = {bakery.id}
            location = {bakery.location}
            branch = {bakery.branch}
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
import { useParams } from "react-router-dom";

import SingleBread from "./SingleBread";
import BreadForm from "./BreadForm";


function Breads({bakeries, onAddBread, onDeletedBread}){
  
    //console.log(bakeries)
    const { id } = useParams();
    let singleBakery = bakeries.find((bakery) => bakery.id === parseInt(id));

  return(
      <div className="Reviews">
         {typeof(singleBakery) == "object" ? <BreadForm bakeryID={singleBakery.id} onAddBread = {onAddBread}/>: false}

         {typeof(singleBakery) == "object" ? singleBakery.breads.map((bread) => {
          //console.log(bread);
            return (
            <SingleBread
                key={bread.id}
                bread = {bread}
                onDeletedBread = {onDeletedBread}
            />
          );
         }) : console.log("it is not an object")}
      </div>
  )

}

export default Breads




              
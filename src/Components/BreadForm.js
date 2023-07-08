import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function BreadForm({bakeryID, onAddBread}){

    console.log(bakeryID)
    //Factor out this section after you are done with project 
   // const [obj setObj] = useState({name:"", price:"", bakery_id:"", type_of_bread:""})

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

   // const [bakery_id, setBakeryId] = useState("")
    const [type_of_bread, setTypeOfbread] = useState("") 

    function handleSubmit(e){
        e.preventDefault();
        const newBread = {
            name:name,
            price:price,
            ///bakery_id: bakery_id,
            type_of_bread: type_of_bread
        }
        setName("")
        setPrice("" )
       // setBakeryId("")
        setTypeOfbread("")
        if(newBread.name === ""){
            alert("You need to enter name, price, and type of bread")
        }else{
        
            fetch(`http://localhost:9292/bakeries/${bakeryID}/breads`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBread), 
        })
        .then((response)=> response.json())
        .then((newItem)=> onAddBread(newItem));
     }
    }

    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/');
    };



    return(
        <div>
            <form onSubmit={handleSubmit}>
            <button type="submit">Add Bread</button>
            <button onClick={handleClick}>Go back</button>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)} 
                placeholder="name of bread"     
                />
                <input
                type= "text"
                name="price" 
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                placeholder="price of bread"
                />
                <input
                type="text"
                name="type_of_bread"
                value={type_of_bread}      
                onChange={(e)=> setTypeOfbread(e.target.value)}
                placeholder="type of bread"
                />
            </form>

        </div>
    )
}

export default BreadForm

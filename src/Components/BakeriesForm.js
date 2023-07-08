import React from "react";
import { useState } from "react";


function BakeriesForm({onAddBakery}){
    
    const[name, setName] = useState("");
    const[location, setLocation] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const bakeryData = {
            name: name,
            location:location,
        };
        setName("")
        setLocation("")
        fetch("http://localhost:9292/bakeries",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bakeryData)
        })
        .then((r) => r.json())
        .then((newBakery) => onAddBakery(newBakery))
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <button type="submit">Add Bakery</button>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)} 
                placeholder="Name of Bakery"     
                />
                <input
                type= "text"
                name="location" 
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                placeholder="location"
                />
            </form>
        </div>
    )
}

export default BakeriesForm 
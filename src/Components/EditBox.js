import React from "react";
import { useState } from "react";

function EditBox({bakeryID, onUpdatedBakery}){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


    //console.log(bakery) 


    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/bakeries/${bakeryID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        location: location,
      }),
    })
      .then((r) => r.json())
      .then((updatedBakery) => onUpdatedBakery(updatedBakery));
  }
  
    return(
        <>
         <button onClick={toggleModal} className="btn-modal"> Edit Bakery </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Edit Bakery Below</h2>
            <div>
            <form onSubmit={handleSubmit}>
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
                onChange={(e)=> setLocation(e.target.value)}
                placeholder="Location of Bakery"
                />
                <button type="submit">Add Bread</button>
            </form>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
        )}
        </>
    )
}

export default EditBox
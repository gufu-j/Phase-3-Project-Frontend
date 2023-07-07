import React from "react";
import { useState } from "react";

function EditBox(){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };



      



    return(
        <>
         <button onClick={toggleModal} className="btn-modal"> Edit Bakery </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Edit Bakery Below</h2>
            <div>
                Hey it's me 
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
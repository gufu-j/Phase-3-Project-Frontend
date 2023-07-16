import './App.css';


import React from 'react';
import { useState, useEffect} from 'react';
import { Route, Routes} from "react-router-dom";


import BakeryHeader from './BakeryHeader';
import Bakeries from './Bakeries';
import Breads from './Breads';

function App() {

  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bakeries")
      .then((resp) => resp.json())
      .then((data) => {
       
        setBakeries(data);
      });
  }, [])

  function handleAddBread(newBread){
    console.log("new bread:", newBread)

    const bakerieToBread = bakeries.find(
      (bread) => bread.id === newBread.bakery_id
    );
    
    bakerieToBread.breads.push(newBread);
    const updatedBakerie = bakeries.map((bakery) => {
      if (bakery.id === bakerieToBread.id) {
        return bakerieToBread;
      } else {
        return bakery;
      }
    });
    setBakeries(updatedBakerie);
  }

  function handleAddBakery(newBakery){
    setBakeries([...bakeries, newBakery ])
  
  }


  function handleDeletedBakery(deletedBakery){
    const updatedBakery = bakeries.filter((bakery) => bakery.id !== deletedBakery.id);
    setBakeries(updatedBakery)
    
  }


  function handleUpdateBakery(updatedBakery){
    const updatedBakeries = bakeries.map((bakery)=>{
      if(bakery.id === updatedBakery.id){
        return updatedBakery
      }else{
        return bakery;
      }
    });
    setBakeries(updatedBakeries)
  }
  
  return (
    <div>
      <BakeryHeader/>
      <Routes>
      <Route path="/" element={<Bakeries bakeries = {bakeries} onAddBakery = {handleAddBakery} onDeleteBakery = {handleDeletedBakery} onUpdatedBakery = {handleUpdateBakery}/>} />
      <Route path="/bakeryBread/:id" element={<Breads bakeries={bakeries} onAddBread={handleAddBread}/>} />
      </Routes>
    </div>
  );
}

export default App;


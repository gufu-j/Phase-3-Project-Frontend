import './App.css';

//needed to perfom actions
import React from 'react';
import { useState, useEffect} from 'react';
import { Route, Routes} from "react-router-dom";

//components
import BakeryHeader from './BakeryHeader';
import Bakeries from './Bakeries';
import Breads from './Breads';

function App() {

  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bakeries")
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setBakeries(data);
      });
  }, [])

  //Post Method here for Breads. add this fuction for Controlled form
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

  //Post Method Here for Bakeries. 


  


  return (
    <div>
      <BakeryHeader/>
      <Routes>
      <Route path="/" element={<Bakeries bakeries={bakeries}/>} />
      <Route path="/bakeryBread/:id" element={<Breads bakeries={bakeries} onAddBread={handleAddBread}/>} />
      </Routes>
    </div>
  );
}

export default App;


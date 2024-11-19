import React from 'react';
import {useState} from 'react';
import data from './data';
import Tours from './components/Tours';
import logo from './logo.svg';
import Card from './components/Card';
import './App.css';


function App() {
  const[tours,setTours]=useState(data);

  function removeTour(id){
    const newTour=tours.filter(tour=>tour.id!==id);
    setTours(newTour);
  }

  if(tours.length===0){
    return(
        <div className='refresh'>
            <h2>No tour is available</h2>
            <button className='btn-white' onClick={()=>setTours(data)}>
              REFRESH
            </button>
        </div>
    );
  }


  return (
    <div className='App'>
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;

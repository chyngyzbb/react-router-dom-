import React from 'react';
import './App.css';
import {Routes, Route}from 'react-router-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Home from './components/Home';
import About from './components/About';
import Popular from './components/Popular';



function App() {
  return (
    <div className="App">
      <Header/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/popular' element={<Popular/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;

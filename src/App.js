import React from 'react';
import './App.css';
import {Routes, Route}from 'react-router-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Meat from './components/Meat';
import Support from './components/Support';



function App() {
  return (
    <div className="App">
      
      <Header/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/meat' element={<Meat/>}/>
        <Route path='/support' element={<Support/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Routes, Route}from 'react-router-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import DetailPage from './components/page/DetailPage';



function App() {
  return (
    <div className="App">
      <Header/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/toprated' element={<TopRated/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movies/detail-page/:movieId' element={<DetailPage/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;

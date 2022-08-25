import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feedpage from './components/Pages/Feed';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from './components/Pages/explore';
import Aroundme from './components/Pages/aroundme';
import Plan from './components/Pages/plan';
import Mymap from './components/Pages/mymap';
import Liked from './components/Pages/liked';
import Profile from './components/Pages/profile';
import Settings from './components/Pages/settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Feedpage/>}/>
      <Route path='/explore' element={<Explore/>}/>    
      <Route path='/aroundme' element={<Aroundme/>}/>    
      <Route path='/plan' element={<Plan/>}/>    
      <Route path='/mymap' element={<Mymap/>}/>    
      <Route path='/liked' element={<Liked/>}/>    
      <Route path='/profile' element={<Profile/>}/>    
      <Route path='/settings' element={<Settings/>}/>    
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

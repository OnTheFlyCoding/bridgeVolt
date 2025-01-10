import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/about';
import Home from './pages/Home';
import Equity from './pages/equity';
import Donate from './pages/donate';
import Support from './pages/Support';
import {BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Visit from './pages/visit';


function App() {

  return (
  <>
  <Router>
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Donate' element={<Donate/>}/>
        <Route path='/Equity' element={<Equity/>}/>
        <Route path='/Visit' element={<Visit/>}/>
        <Route path='/Support' element={<Support/>}/>
      </Routes> 
      <Footer/>
    </div>
   

  </Router>
  </>
  )
}

export default App

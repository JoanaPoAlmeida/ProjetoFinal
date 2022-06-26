//yarn start
import './App.css';
import { useState,useEffect } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Switch --> Routes
import Home from './pages';
import Entity from './pages/Entity';
import Keywords from './pages/Keywords';
import POS from './pages/POS';
import Sum from './pages/Sum';
import LangDetect from './pages/LangDetect';
import Start from './pages/start';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/Entity' element={<Entity/>}/>
          <Route path='/POS' element={<POS/>}/>
          <Route path='/Keywords' element={<Keywords/>}/>
          <Route path='/LangDetect' element={<LangDetect/>}/>
          <Route path='/Sum' element={<Sum/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

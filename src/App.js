import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Category from './components/category';
import FrequentQA from './components/frequentQA';
import Routes from './Routes';
import { Router, Switch,Route } from 'react-router-dom';
import history from './history';


function App() {
  
  return (
    <div>
          <div>
          <Search/>
          </div>
          <Category/>
          <div style={{marginLeft: '1.5rem'}}>
          <FrequentQA/>
          </div>
      
     
    </div>
    
  );
  
}

export default App;

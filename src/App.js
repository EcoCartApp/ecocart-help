import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Category from './components/category';
import FrequentQA from './components/frequentQA';
import Routes from './Routes';
import { Router, Switch,Route } from 'react-router-dom';
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import { Row } from 'react-bootstrap';

function App() {
  
  return (
      <div>
          <Search/>
          

<Container fluid="md">
          <Row>
          <Category/>
          </Row>         
           <Row style={{marginLeft: '1.5rem'}}>
          <FrequentQA/>
          </Row>
      
     
    </Container></div>
    
  );
  
}

export default App;

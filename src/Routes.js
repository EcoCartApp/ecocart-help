import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import App from "./App";
import CategoryMain from "./components/Categories/categoryMain";


export default class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/' component={App} />
                    
                    <Route path='/category/:id' component={CategoryMain} />
                    
                    
                    
                </Switch>
        )
    }
}
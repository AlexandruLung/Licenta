import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import login from "../logincomponent/login.component";
import register from "../registrecomponent/register.component";
import history from './history.component';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" exact component={login} />
                    <Route path="/register" component={register} />
             
                </Switch>
            </Router>
        )
    }
}
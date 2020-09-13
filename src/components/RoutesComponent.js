import React, {Component} from 'react';
import HomePage from "../pages/HomePage";
import * as ROUTES from '../constants/routePaths';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

class RoutesComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={ROUTES.CUSTOMERS} />
                    <Route exact path={ROUTES.ORDERS}/>
                </Switch>
            </div>
        );
    }
}

export default RoutesComponent;
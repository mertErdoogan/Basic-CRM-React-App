import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import * as ROUTES from '../constants/routePaths';

class HomePage extends Component {

    render() {
        return (
            <div className="home-root">
                <div className="left-menu">
                    <div className="left-menu-block">
                        <ul>
                            <li><NavLink exact to={ROUTES.ORDERS}>Siparisler</NavLink></li>
                            <li><NavLink exact to={ROUTES.CUSTOMERS}>Müşteriler</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
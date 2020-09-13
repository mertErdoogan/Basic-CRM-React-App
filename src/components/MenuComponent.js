import React, {Component} from 'react';

class MenuComponent extends Component {
    render() {
        return (
            <div className="menu-root">
                <div className="menu-wrapper">
                    <div className="menu-container">
                        <div className="menu-item">
                            <a href="/">Siparişler</a>
                        </div>
                        <div className="menu-item">
                            <a href="/">Müşteriler</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuComponent;
import React from 'react';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="menu-bar">
                    <div className="menu-item">
                        <Link className="menu-item-link" to="/">Home</Link>
                    </div>
                    <div className="menu-item">
                        <Link className="menu-item-link" to="/about">About</Link>
                    </div>
                    <div className="menu-item">
                        <Link className="menu-item-link" to="/inbox">Inbox</Link>
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}



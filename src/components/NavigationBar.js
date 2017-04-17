import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Blog App</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
        </nav>
    );
}
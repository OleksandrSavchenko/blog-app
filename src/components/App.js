import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}
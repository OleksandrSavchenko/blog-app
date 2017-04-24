import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <FlashMessagesList />
                {this.props.children}
            </div>
        );
    }
}
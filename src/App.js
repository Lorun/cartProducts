import React, { Component } from 'react';

import { Cart } from './cart';
//import Header from './common/Header';

import './App.css';


class App extends Component {

    render() {
        return (
            <div className="common">
                {/*<Header />*/}

                <div className="section text-center">
                    <h1>Front-End Developer</h1>
                    <p>Adyax’s core values take top priority: we care for our client, and we care for our people. Staff and clients work in partnership with consistent,  transparent communication.</p>
                </div>

                <div className="section section--yellow">
                    <Cart/>
                </div>
            </div>
        );
    };
}

export default App;
import React, { Component } from 'react';

import { CartList } from './cart';
//import Header from './common/Header';

import './App.css';


class App extends Component {

    render() {
        return (
            <div className="common">
                {/*<Header />*/}

                <h1>Front-End Developer</h1>

                <CartList/>
            </div>
        );
    };
}

export default App;
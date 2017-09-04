import ReactDOM from 'react-dom';
import React from 'react';

import {BrowserRouter as Router, Route, } from 'react-router-dom';
import './component';

window.React = React;
window.ReactDOM = ReactDOM;

import './css/index.scss';
import Main from './main';

const Page = () => (
    <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/:page" component={Main} />
        </div>
    </Router>
)

ReactDOM.render(<Page />, root);
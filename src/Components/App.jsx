import React, {Component} from 'react';
import {BroswerRouter as Router,Route,Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import HomePage from './HomePage';
import Navbar from './HeaderComponent/NavBar';


class App extends Component {
    render(){
        return {
            <Router>
                <div>
                    <Navbar/>
                    <Route name="home" exact path="/" component={HomePage}/>
                </div>
            </Router>
        }
    }
}
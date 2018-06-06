import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import {browserHistory} from 'react-router';
import HomePage from './HomePage.jsx';
import Footer from './FooterComponent.jsx';

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Footer />
                    <Route path="/home" component={HomePage} />
                </div>
            </Router>
        )
    }
}

export default App;
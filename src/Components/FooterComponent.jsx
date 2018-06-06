import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return (
            <footer>
                <div>
                    Footer Component
                    <Link to="/foot">go here</Link>
                </div>
            </footer>
        )
    }
}


export default Footer;
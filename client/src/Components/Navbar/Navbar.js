import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    
    render() {
        return (
            <div id='navbar'>
                <h1>Fiction-jeans</h1>
                    <ul id='links'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/shop'>Store</a></li>
                        <li><a href='/login'>LogIn</a></li>
                    </ul>
            </div>
        )
    }
}

export default Navbar;
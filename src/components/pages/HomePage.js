import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Loading Page...</h1>
                <div><Link to="/login">Login Page</Link></div>
                <div><Link to='createAccount'>Create Account</Link></div>
            </div>
        )
    }
}

export default HomePage;
import React, { Component } from 'react';
import Users from './Users.js'
import Blogs from './Blogs.js'
import './styles.css';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="users">
                    <Users />
                </div>
                <div className="blogs">
                    <Blogs />
                </div>
            </div>
        );
    }

}

export default Home;
import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'

import './style.css' //link to main css probs

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <div className="row-flex" style={{ justifyContent: 'space-between', height: '100%' }}>
                    <div className="col-flex" id="user-menu">
                        <MaterialIcon icon="account_circle" size={280} ></MaterialIcon>
                        <div id="home-links" className="col-flex">
                            <div>
                                <button className="primary-button">Change Profile Picture</button>
                                <div>
                                    <Link to="/"><h2>Home</h2></Link>
                                </div>
                                <div>
                                    <Link to="/pets"><h2>Manage Pets</h2></Link>
                                </div>
                                <div>
                                    <Link to="/messages"><h2>Chats</h2></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="account-info" className="col-flex">
                        <div className="info-divs col-flex">
                            <div className="styled-input">
                                <input></input>
                                <div>Name</div>
                            </div>
                            <div className="styled-input">
                                <input></input>
                                <div>Email</div>
                            </div>
                            <div className="styled-input">
                                <input></input>
                                <div>Phone Number</div>
                            </div>
                            <div className="styled-input">
                                <input></input>
                                <div>Range - distance you would travel for a job</div>
                            </div>
                            <div className="styled-textfield">
                                <textarea></textarea>
                                <div>About Me</div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;
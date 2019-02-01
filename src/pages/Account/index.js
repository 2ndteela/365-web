import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import Post from '../../comp/Post/post';

import './style.css' //link to main css probs
import { FormControl, InputLabel, Select, Button, Input, MenuItem, OutlinedInput, Checkbox, FormControlLabel, Divider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#FF3B3F' },
        secondary: {
            main: '#f44336',
        },
    },
})
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
                            <Button variant="contained" color="primary">Change Profile Picture</Button>
                        </div>
                    </div>
                    <div id="account-info" className="col-flex">
                        <div className="info-divs" className="row-flex">
                            <div id="account-info-listing" className="col-flex">
                                <div id="username-div">
                                    <ul>
                                        <li>Leroy Jenkins</li>
                                        <Divider light="true" />
                                        <li>Name</li>
                                    </ul>
                                </div>
                                <div id="email-div">
                                    <ul list-style="none">
                                        <li>Leroy@Jenkins.com</li>
                                        <Divider light="true" />
                                        <li>Email</li>
                                    </ul>
                                </div>
                                <div id="phone-div">
                                    <ul list-style="none">
                                        <li>867-5309</li>
                                        <Divider light="true" />
                                        <li>Phone</li>
                                    </ul>
                                </div>
                                <div id="distance-div">
                                    <ul list-style="none">
                                        <li>500 miles</li>
                                        <Divider light="true" />
                                        <li>Distance Away</li>
                                    </ul>
                                </div>
                                <textarea name="text" rows="6" columns="250">
                                    My name is tim and i like ducks the most out of any pet. Mallards are cool, but honestly really I just love ducks. I've got a mug on my desk that says "I love big ducks and I cannot lie", and I think that really says a lot about me as a person.
                                </textarea>
                            </div>
                            <div className="notifications col-flex">
                                <div className="row-flex" />
                                <div className="row-flex email-phone">
                                    <div className="row-flex email-notif">
                                        <FormControlLabel control={
                                            <Checkbox name="email-notifications" />
                                        } label="Notifications" />
                                    </div>
                                    <div className="row-flex phone-notif">
                                        <FormControlLabel control={
                                            <Checkbox name="phone-notifications" />
                                        } label="Notifications" />
                                    </div>
                                </div>
                                <div className="row-flex notif-pets">
                                <p>Select which notifications you want</p>
                                    <FormControlLabel control={
                                        <Checkbox name="dog-notifications" />
                                    } label="Dogs" />
                                    <FormControlLabel control={
                                        <Checkbox name="cat-notifications" />
                                    } label="Cats" />
                                    <FormControlLabel control={
                                        <Checkbox name="large-notifications" />
                                    } label="Bigger Animals" />
                                    <FormControlLabel control={
                                        <Checkbox name="rodent-notifications" />
                                    } label="Rodents" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;
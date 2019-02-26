import React, { Component } from 'react';
// import MaterialIcon from 'material-icons-react';

import './style.css' //link to main css probs

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Derek Zoolander",
            email: 'Really-really-really-rediculously-good-looking@AOL.net',
            phone: '1-800-hot-land',
            range: '25 miles',
            location: 'City For Ants, Utah, 84606',
            emailNotifs: true,
            phoneNotifs: true,
            about: 'I was once a really famous model. But now I like to watch pets and contemplate the deeper things in life. Like how to turn left.' +
                ' or why people are so fast to hate and so slow to love... Anyway, I like bigger animals and especially Llamas.'
        }
    }

    updateValue(e, data) {
        this.setState({
            [data]: e.target.value
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <div className="row-flex" style={{ justifyContent: 'space-between', height: '100%' }}>
                    <div className="col-flex" id="user-menu">
                        <img src={require('../../resources/zoolander.jpg')} alt="profile"></img>
                    </div>
                    <div id="account-info" className="col-flex">
                        <div className="info-divs col-flex">
                            <div className="styled-input">
                                <input value={this.state.name} onChange={(e) => this.updateValue(e, 'name')} ></input>
                                <div>Name</div>
                            </div>
                            <div className="notifs">
                                <div className="styled-input">
                                    <input value={this.state.email} id="x" onChange={(e) => this.updateValue(e, 'email')}></input>
                                    <div>Email</div>
                                </div>
                                <div className="kid-notif">
                                    <label for="x"><input type="checkbox" id="x" value={this.state.emailNotifs} onChange={(e) => this.updateValue(e, 'emailNotifs')} /> Email Alerts</label>
                                </div>
                            </div>
                            <div className="notifs">
                                <div className="styled-input">
                                    <input value={this.state.phone} onChange={(e) => this.updateValue(e, 'phone')} ></input>
                                    <div>Phone Number</div>
                                </div>
                                <div className="kid-notif row-flex">
                                    <label for="y"><input type="checkbox" id="y" value={this.state.phoneNotifs} onChange={(e) => this.updateValue(e, 'phoneNotifs')} /> Phone Alerts</label>
                                </div>
                            </div>
                            <div className="styled-input">
                                <input value={this.state.range} onChange={(e) => this.updateValue(e, 'range')} ></input>
                                <div>Range - distance you would travel for a job</div>
                            </div>
                            <div className="styled-input">
                                <input value={this.state.location} onChange={(e) => this.updateValue(e, 'location')} ></input>
                                <div>Location - used to find people near you</div>
                            </div>
                            <div className="styled-textfield">
                                <textarea value={this.state.about} onChange={(e) => this.updateValue(e, 'about')}></textarea>
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
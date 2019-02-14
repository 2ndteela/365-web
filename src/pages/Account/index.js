import React, { Component } from 'react';

import './style.css' //link to main css probs

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Derek Zoolander",
            email: 'Really-really-really-rediculously-good-looking@AOL.net',
            phone: '1-800-hot-land',
            range: '25 miles'
        }
    }

    updateValue(e, data) {
        this.setState({
            [data] : e.target.value
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
                            <div className="styled-input">
                                <input value={this.state.email}  onChange={(e) => this.updateValue(e, 'email')}></input>
                                <div>Email</div>
                            </div>
                            <div className="styled-input">
                                <input value={this.state.phone} onChange={(e) => this.updateValue(e, 'phone')} ></input>
                                <div>Phone Number</div>
                            </div>
                            <div className="styled-input">
                                <input value={this.state.range} onChange={(e) => this.updateValue(e, 'range')} ></input>
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
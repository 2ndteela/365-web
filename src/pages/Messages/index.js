import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: [],
         }
    }
    render() { 
        return ( 
        <div style={{height: '100%'}} className="row-flex">
            <div id="messages-menu">
                <div id="back-home">
                    <Link to="/" >Home</Link>
                </div>
                <div className="conversation-header selected">
                    <div style={{height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey'}}></div>
                    <div className="convo-name">Jack O. Lantern</div>
                </div>
                <div className="conversation-header">
                    <div style={{height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey'}}></div>
                    <div className="convo-name">Testy McTest-face</div>
                </div>
                <div className="conversation-header">
                    <div style={{height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey'}}></div>
                    <div className="convo-name">Someone Else</div>
                </div>
            </div>
            <div id="messages">
                <div id="message-composer">
                    <input></input>
                    <button className='primary-button'>Send</button>
                </div>
            </div>
        </div>
        )
    }
}
 
export default Messages;
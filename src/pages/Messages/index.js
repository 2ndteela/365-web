import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chats: [{
                from: 'Jack 0. Lantern',
                messages: []
            },
            {
                from: 'Testy McTest Face',
                messages: [],
                current: true
            },
            {
                from: 'Soime Else',
                messages: []
            }
        ],
         }
    }

    setActive(idx) {
        const temp = this.state.chats

        temp.forEach(chat => {
            if(chat.current) chat.current = false
        })

        temp[idx].current = true

        this.setState({
            chats: temp
        })
    }

    render() { 
        return ( 
        <div style={{height: '100%'}} className="row-flex">
            <div id="messages-menu">
                <div id="back-home">
                    <Link to="/" >Home</Link>
                </div>
                <div>
                {
                    this.state.chats.map((chat, itr) => {
                        if(chat.current) {
                            return (
                            <div className="conversation-header selected">
                                <div style={{height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey'}}></div>
                                <div className="convo-name">{chat.from}</div>
                            </div>
                            )
                        }
                        else {
                            return(
                            <div className="conversation-header" onClick={() => this.setActive(itr)}>
                                <div style={{height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey'}}></div>
                                <div className="convo-name">{chat.from}</div>
                            </div>
                            )
                        }
                    })
                }
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
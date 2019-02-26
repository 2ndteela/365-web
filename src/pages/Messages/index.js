import React, { Component } from 'react';
import ChatBubble from 'react-chat-bubble';
// import { Link } from 'react-router-dom'
import './style.css'

//messages [] is a stack
class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [{
                from: 'Jack 0. Lantern',
                messages: [{ text: "hey", sent: true }, { message: "hEy", sent: false }]
            },
            {
                from: 'Testy McTest Face',
                messages: [{ message: "sup bruh", sent: true }, { message: "SuP bRuH", sent: false }],
                current: true
            },
            {
                from: 'Soime Else',
                messages: [{ message: "can you dogsit for me?", sent: true }, { message: "cAn YoU dOgSiT fOr mE?", sent: false }]
            }
            ],
        }
    }

    setActive(idx) {
        const temp = this.state.chats

        temp.forEach(chat => {
            if (chat.current) chat.current = false
        })

        temp[idx].current = true

        this.setState({
            chats: temp
        })
    }

    updateValue(e, data) {
        this.setState({
            [data]: e.target.value
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} className="row-flex">
                <div id="messages-menu">
                    <div id="back-home">
                        {/* <Link to="/" >Home</Link> */}
                        <h2>Messages</h2>
                    </div>
                    <div>
                        {
                            this.state.chats.map((chat, itr) => {
                                if (chat.current) {
                                    return (
                                        <div className="conversation-header selected">
                                            <div style={{ height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey' }}></div>
                                            <div className="convo-name">{chat.from}</div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="conversation-header" onClick={() => this.setActive(itr)}>
                                            <div style={{ height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey' }}></div>
                                            <div className="convo-name">{chat.from}</div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div id="messages" className="col-flex">
                    <div className="convo-container">
                        <div className="convo-messages">
                            {
                                this.state.chats.map((chat) => {
                                    if (chat.current) {
                                        return (
                                            <div className="message-list">
                                                {chat.messages.map((message) => {
                                                    if (message.sent) {
                                                        return (
                                                            <div className="sent-message">{message.message}</div>
                                                        )
                                                    }
                                                    else if (!message.sent) {
                                                        return (
                                                            <div className="rec-message">{message.message}</div>
                                                        )
                                                    }
                                                    return (
                                                        <span></span>
                                                    )
                                                })
                                                }
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <span></span>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div id="message-composer">
                        <input id="message-input"></input>
                        <button className='primary-button' onChange={(e) => this.updateValue(e, 'messages')}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messages;
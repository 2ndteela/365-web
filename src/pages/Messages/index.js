import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import './style.css'

//chats [] is a stack
class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [{
                from: 'Jack 0. Lantern',
                messages: [{ message: "Hey man, thanks for being willing to watch my dog. Looks like you done this before, take care of him eh?", sent: true }, { message: "No problem! Any special needs I should worry about?", sent: false }, { message: "Nah, hes a good doggo. Thanks again, ill venmo you", sent: true }, {message: "venmo is reunite_outKast_plz", sent: false}],
                current: true
            },
            {
                from: 'Testy McTest Face',
                messages: [{ message: "Just a heads up my dog has 3 heads, like in that harry potter book y'know? Gotta play a harp or something", sent: true }, { message: "Righto chap, cheeky little bugger innit?", sent: false }, { message: "jolly good", sent: true }],
            },
            {
                from: 'Soime Else',
                messages: [{ message: "can you dogsit for me?", sent: true }, { message: "cAn YoU dOgSiT fOr mE?", sent: false }, { message: "blocked and reported", sent: true }]
            }
            ],
            newMessage: ''
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

    addMessage = event => {
        var message = this.state.newMessage;
        var newMessage = [{ message: message, sent: true }];
        const tChats = this.state.chats;

        tChats.forEach(chat => {
            if (chat.current) {
                chat.messages = [...chat.messages, ...newMessage];
                tChats.newMessage = '';
                this.setState({
                    chats: tChats
                })
            }
        })
        this.setState({
            newMessage:''
        })
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.addMessage();
        }
    }

    render() {
        return (
            <div style={{ height: '100%' }} className="row-flex">
                <div id="messages-menu">
                    <div id="back-home">
                        {/* <Link to="/" >Home</Link> */}
                        <div className="alt-h2">Messages</div>
                    </div>
                    <div id="line">
                        <center><hr width="90%"></hr></center>
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
                                                            <div className="row w-100"><div className="speech-bubble sent-message">{message.message}</div></div>
                                                        )
                                                    }
                                                    else if (!message.sent) {
                                                        return (
                                                            <div className="row w-100"><div className="speech-bubble rec-message">{message.message}</div></div>
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
                        <input value={this.state.newMessage} onChange={(e) => this.updateValue(e, 'newMessage')} onKeyDown={(e)=>this.handleKeyPress(e)}></input>
                        <button className='primary-button' onClick={() => this.addMessage()}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messages;
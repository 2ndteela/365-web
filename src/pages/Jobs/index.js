import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobdata: [{
                from: 'Job1',
                messages: []
            },
            {
                from: 'Job2',
                messages: [],
                current: true
            },
            {
                from: 'Job3',
                messages: []
            }
        ],
         }
    }

    setActive(idx) {
        const temp = this.state.jobdata

        temp.forEach(jobdata => {
            if(jobdata.current) jobdata.current = false
        })

        temp[idx].current = true

        this.setState({
            chats: temp
        })
    }

    render() { 
        return ( 
        <div style={{height: '100%'}} className="row-flex">
            <div id="jobs-menu">
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
                            <div className="jpb-header" onClick={() => this.setActive(itr)}>
                                <div style={{height: '36px', width: '36px', borderRadius: '18px', backgroundColor: 'grey'}}></div>
                                <div className="convo-name">{chat.from}</div>
                            </div>
                            )
                        }
                    })
                }
                </div>
            </div>
            <div id="jobs">
                <div id="jobs-composer">
                    <input></input>
                    <button className='primary-button'>Send</button>
                </div>
            </div>
        </div>
        )
    }
}
 
export default Jobs;
import React, { Component } from 'react'
import Post from '../../comp/Post/post'
import RequestDialog from '../../comp/RequestDialog'
import './style.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: 'Newest',
            posts: [
                {
                    user: 'Newt Scamander',
                    time: '15 mins',
                    description: 'Looking for someone to watch after my Niffler. I must be on the move for the next two weeks.',
                    pay: '5 Gallions',
                    profile: '../../resources/scamander.jpg',
                },
            ],
            showNewReq: false
         }

         this.hideReqDialog = this.hideReqDialog.bind(this)
    }

    hideReqDialog() {
        this.setState({
            showNewReq: false
        })
    }

    updateValue(e, data) {
        this.setState({
            [data] : e.target.value
        })
    }

    showNewRequest() {
        this.setState({
            showNewReq: true
        })
    }

    render() { 
        return ( 
            <div style={{height: '100%'}}>
                <div className="row-flex" style={{justifyContent: 'space-between', height: '100%'}}>
                    <div className="col-flex" id="user-menu">
                        <img src={require('../../resources/zoolander.jpg')} alt="profile"/>
                    </div>
                    <div id="timeline" className="col-flex">
                        <div id="timeline-header" className="row-flex" style={{justifyContent: 'space-between'}}>
                            <button className="primary-button" onClick={() => this.showNewRequest()}>New Sitter Request</button>
                                <select>
                                    <option value="Newest" >Newest</option>
                                    <option value="Nearest" >Nearest</option>
                                    <option value="Paid" >Paid</option>
                                    <option value="Urgent" >Urgent</option>
                                </select>
                        </div>
                        <div id="posts">
                            {this.state.posts.map(p => (
                                <Post postData={p}></Post>
                            ))}
                        </div>
                    </div>
                </div>
                <RequestDialog show={this.state.showNewReq} callback={this.hideReqDialog}></RequestDialog>
            </div>
         );
    }
}
 
export default Home;
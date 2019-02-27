import React, { Component } from 'react'
import Post from '../../comp/Post/post'
import RequestDialog from '../../comp/RequestDialog'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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
                    profile: 'scamander.jpg',
                },
            ],
            showNewReq: false
         }

         this.hideReqDialog = this.hideReqDialog.bind(this)
         this.addPetPost = this.addPetPost.bind(this)
    }

    addPetPost(toAdd) {
        const temp = this.state.posts
        toAdd.user = 'Derek Zoolander'
        toAdd.profile = 'zoolander.jpg'

        const month = parseInt(toAdd.startDate.split('/')[0], 10)
        const date = parseInt(toAdd.startDate.split('/')[1], 10)
        const year = parseInt(toAdd.startDate.split('/')[2], 10)

        const hour = parseInt(toAdd.startHour, 10)
        const mins = parseInt(toAdd.startMins, 10)

        const NOW = new Date()
        const newDate = new Date(year, month - 1, date, hour, mins, 0)

        const diff = newDate - NOW
        let mSecs = diff

        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
        mSecs -= daysLeft * 1000 * 60 * 60 * 24

        const hoursLeft = Math.floor(mSecs / 1000 / 60 / 60)
        mSecs -= hoursLeft * 1000 * 60 * 60

        const minsLeft = Math.floor(mSecs / 1000 / 60)
        mSecs -= minsLeft * 1000 * 60

        console.log(daysLeft, hoursLeft, minsLeft)

        if (daysLeft > 1) toAdd.time = daysLeft + ' Days'
        else if (daysLeft === 1) toAdd.time = daysLeft + ' Day'
        else if (hoursLeft > 1) toAdd.time = hoursLeft + ' Hours'
        else if (hoursLeft === 1) toAdd.time = hoursLeft + 'Hour'
        else if (minsLeft > 1) toAdd.time = minsLeft + ' Mins'
        else toAdd.time = 'Expired'

        temp.push(toAdd)

        this.setState({
            posts: temp,
            showNewReq: false
        })
    }

    hideReqDialog() {
        this.setState({
            showNewReq: false
        })
    }

    updateValue(e, data) {
        this.setState({
            [data]: e.target.value
        })
    }

    showNewRequest() {
        this.setState({
            showNewReq: true
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <div className="row-flex" style={{ justifyContent: 'space-between', height: '100%' }}>
                    <div className="col-flex" id="user-menu">
                        <img src={require('../../resources/zoolander.jpg')} alt="profile" />
                    </div>
                    <div id="timeline" className="col-flex">
                        <div id="timeline-header" className="row-flex" style={{ justifyContent: 'space-between' }}>
                            <button className="primary-button" onClick={() => this.showNewRequest()}>New Sitter Request</button>
                            <select>
                                <option value="Newest" >Newest</option>
                                <option value="Nearest" >Nearest</option>
                                <option value="Paid" >Paid</option>
                                <option value="Urgent" >Urgent</option>
                            </select>
                        </div>
                        <div id="posts">
                            {this.state.posts.map((p, itr) => (
                                <Post postData={p} key={itr + '-post'} ></Post>
                            ))}
                        </div>
                    </div>
                </div>
                <RequestDialog show={this.state.showNewReq} callback={this.hideReqDialog} postBack={this.addPetPost}></RequestDialog>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react'
import Post from '../../comp/Post/post'
import RequestDialog from '../../comp/RequestDialog'
import './style.css'
import { Link } from 'react-router-dom'


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
                    pet: 'Niffler'
                },
                {
                    user: 'Martha Stewart',
                    time: '3 Days',
                    description: 'Would anyone like to watch my lab over the weekend? She is the sweetest!',
                    pay: '700 Dollars',
                    profile: 'martha.jpg',
                    pet: 'Golden'
                },
                {
                    user: 'Link',
                    time: '1 Weeks',
                    description: 'Ponita needs to be taken out a least once a day next week as I go to battle the greatest evil of all',
                    pay: '1000 Rupees',
                    profile: 'link.png',
                    pet: 'Ponita'
                },
                {
                    user: 'Elon Musk',
                    time: '2 Weeks',
                    description: 'I need a new pet tiger feeder becuase... reasons',
                    pay: '1,000,000 Dollars',
                    profile: 'elon.jpg',
                    pet: 'Trina'
                },
                {
                    user: 'Terry Crews',
                    time: '2 Days',
                    description: 'Hey, could someone watch my parrot while I go for my next photo shoot?',
                    pay: '5,000 Dollars',
                    profile: 'crews.jpg',
                    pet: 'Echo'
                },
            ],
            myPosts: [
                {
                    pet: 'Spot',
                    time: '5 Days',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5RhsPk63Bt8nliF3NoTXFSCfpYzgIJXz9qt5iuOhxTY6ZicdAA',
                    description: "Anyone want to help me out combing through Spot's hair? Should only take an hour or two at most."
                },
                {
                    pet: 'Miqus',
                    time: '7 Days',
                    img: 'https://www.ctvsh.com/sites/default/files/styles/large/adaptive-image/public/siberian-husky-dog-breed-info.jpg?itok=Mp4QXlOs',
                    description: "Miqus needs walkies"
                },
                {
                    pet: 'Mrs. Scratchers',
                    time: '2 hours',
                    img: 'https://cdn.shopify.com/s/files/1/2422/3327/files/congo-african-grey-02-300x294_large.jpg?v=1509478085',
                    description: 'Mrs. Scratchers needs a cuddle buddy'
                }
            ],
            showNewReq: false,
            showEdit: false,
            toEdit: {},
            editData: {
                pet: 'Miqus',
                salary: '',
                startDate: '',
                startMonth: '',
                startYear: 2018,
                startHour: 8,
                startMins: 0,
                endDate: '',
                endMonth: '',
                endYear: 2019,
                endHour: 10,
                endMins: 0,
                description: '',
            }
         }

         this.hideReqDialog = this.hideReqDialog.bind(this)
         this.addPetPost = this.addPetPost.bind(this)
         this.showNewRequest = this.showNewRequest.bind(this)
         this.acceptJob = this.acceptJob.bind(this)
    }

    resetModal() {
        const temp = {
            pet: 'Miqus',
            salary: '',
            startDate: '',
            startMonth: '',
            startYear: 2018,
            startHour: 8,
            startMins: 0,
            endDate: '',
            endMonth: '',
            endYear: 2019,
            endHour: 10,
            endMins: 0,
            description: '',
        }

        this.setState({
            editData: temp
        })
    }

    addPetPost(toAdd) {
        const temp = this.state.myPosts
        toAdd.user = 'Derek Zoolander'
        toAdd.profile = 'zoolander.jpg'
        if(toAdd.pet === 'Miqus') toAdd.img = 'https://www.ctvsh.com/sites/default/files/styles/large/adaptive-image/public/siberian-husky-dog-breed-info.jpg?itok=Mp4QXlOs'
        else if(toAdd.pet === 'Spot') toAdd.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5RhsPk63Bt8nliF3NoTXFSCfpYzgIJXz9qt5iuOhxTY6ZicdAA'
        else toAdd.img = 'https://cdn.shopify.com/s/files/1/2422/3327/files/congo-african-grey-02-300x294_large.jpg?v=1509478085'

        const month = parseInt(toAdd.startMonth, 10)
        const date = parseInt(toAdd.startDate, 10)
        const year = parseInt(toAdd.startYear, 10)

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

        if(daysLeft > 1) toAdd.time = daysLeft + ' Days' 
        else if (daysLeft === 1) toAdd.time = daysLeft + ' Day' 
        else if (hoursLeft > 1) toAdd.time = hoursLeft + ' Hours'
        else if (hoursLeft === 1) toAdd.time = hoursLeft + ' Hour'
        else if (minsLeft >  1) toAdd.time = minsLeft + ' Mins'   
        else toAdd.time = 'Expired'

        temp.push(toAdd)

        this.setState({
            myPosts: temp, 
        })

        this.hideReqDialog()
    }

    hideReqDialog() {
        setTimeout(() => {
            this.setState({
                showNewReq: false,
                toEdit: null
            })
            this.resetModal()
        }, 300)
    }

    updateValue(e, data) {
        this.setState({
            [data]: e.target.value
        })
    }

    fadeInDialog() {
        const test = document.getElementById('dialog')
        if(test) {
            test.classList.add('no-pacity') 
            document.getElementById('request-dialog-background').classList.add('fade-in-back')
        }
    }
    showNewRequest(editObj) { 
        this.setState({
            showNewReq: true,
        })
        if(editObj) {
            const stuff = this.state.posts
            this.setState({
                editData: stuff[editObj]
            })
        }

        setTimeout(() => {  this.fadeInDialog() }, 1)
    }

    shortDes(des) {
        if(des.length > 20) {
            const temp = des.substr(0, 20) + "..."
            return <div className="chip-description" >{temp}</div>
        }
        else return <div className="chip-description" >{des}</div>
    }

    acceptJob(idx) {
        let temp = []

        for(let i = 0; i < this.state.posts.length; i++) {
            if(i !== idx) temp.push(this.state.posts[i])
            else {
                const newer = {...this.state.posts[i]}
                newer.accepted = true 
                temp.push(newer)
            }
        }
        this.setState({
            posts: temp
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
                        <div className="row-flex" style={{justifyContent: 'space-between', width: '100%', padding: '16px'}}>
                            <h3 style={{margin: 0}} >My Listings</h3>
                            <button onClick={() => this.showNewRequest()} className="primary-button h-fit">New Listing</button>
                        </div>
                        <div id="my-posts">
                            {this.state.myPosts.map((post, itr) => {
                                return (
                                    <Link to='/jobs'>
                                    <div className="my-post-chip" key={itr + '-chip'}>
                                        <img src={post.img} alt="pet" />
                                        <div className="chip-text">
                                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                                <div style={{color: 'grey'}}>{post.time}</div>
                                            </div>
                                            {this.shortDes(post.description)}
                                        </div>
                                    </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div id="timeline-header" className="row-flex" style={{justifyContent: 'space-between'}}>
                            <h3>Local Listings</h3>
                                <div className="styled-input" style={{width: '150px'}}>
                                    <select>
                                        <option value="Newest" >Newest</option>
                                        <option value="Nearest" >Nearest</option>
                                        <option value="Paid" >Paid</option>
                                        <option value="Urgent" >Urgent</option>
                                    </select>
                                    <div>Filter</div>
                                </div>
                        </div>
                        <div id="posts">
                            {this.state.posts.map((p, itr) => (
                                <Post postData={p} key={itr + '-post'} callBack={this.acceptJob} idx={itr} ></Post>
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
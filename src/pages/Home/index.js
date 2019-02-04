import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'
import {Link} from 'react-router-dom'
import Post from '../../comp/Post/post'
import './style.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: 'Newest',
            posts: [
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
                {
                    user: 'Test',
                    time: '15 mins',
                    description: 'Spot needs some walkies',
                    pay: '$50'
                },
            ]
         }
    }

    updateValue(e, data) {
        this.setState({
            [data] : e.target.value
        })
    }

    render() { 
        return ( 
            <div style={{height: '100%'}}>
                <div className="row-flex" style={{justifyContent: 'space-between', height: '100%'}}>
                    <div className="col-flex" id="user-menu">
                        <MaterialIcon icon="account_circle" size={140} ></MaterialIcon>
                    </div>
                    <div id="timeline" className="col-flex">
                        <div id="timeline-header" className="row-flex" style={{justifyContent: 'space-between'}}>
                            <button className="secondary-button">New Sitter Request</button>
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
            </div>
         );
    }
}
 
export default Home;
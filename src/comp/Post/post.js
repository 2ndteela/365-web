import React, { Component } from 'react';
import './style.css'
import MaterialIcon from 'material-icons-react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profilePic: this.props.postData.profile,
            shown: false
         }
    }

    handleMouseOver() {
        this.setState({
            shown: true
        })
    }

    handleMouseExit() {
        this.setState({
            shown: false
        })
    }

    render() { 
        return ( 
            <div className="post-container col-flex" onMouseEnter={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseExit()}>
                <div className="row-flex">
                    <img src={require('../../resources/scamander.jpg')} alt="profile" />
                    <div>
                        <h3>{this.props.postData.user}</h3>
                        <div style={{color: 'grey'}}>Start: {this.props.postData.time}</div>
                    </div>
                </div>
                <div className="post-description">
                    {this.props.postData.description}
                    <div className={'post-buttons col-flex ' + (this.state.shown ? 'show-buttons' : '') }>
                    <span>
                        <button className="icon-button"><MaterialIcon icon="done" size={20} ></MaterialIcon></button>
                    </span>
                    <span>
                        <button className="icon-button"><MaterialIcon icon="message" size={20} ></MaterialIcon></button>
                    </span>
                    {/* <span>
                        <button className="icon-button"><MaterialIcon icon="help" size={20} ></MaterialIcon></button>
                    </span> */}
                </div>
                </div>
            </div>
         );
    }
}
 
export default Post;
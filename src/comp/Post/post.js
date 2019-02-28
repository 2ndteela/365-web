import React, { Component } from 'react';
import './style.css'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom';

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
        if(this.state.shown) {
            this.setState({
                shown: false
            })
        }
    }
    acceptJob() {
        this.props.callBack(this.props.idx)
    }
  
    payment() {
        const amount = this.props.postData.salary 
        if(amount) {
            return amount
        }
        else return "No payment offered"
    }


    render() { 
        return ( 
            <div className={(this.props.postData.accepted ? 'job-gone ' : '') +  " post-container col-flex"}  onMouseEnter={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseExit()}>
                <div className="row-flex">
                    <img src={require('../../resources/' + this.state.profilePic)} alt="profile" onError={() => '../../resources/white-paw.png'} />
                    <div>
                        <h3>{this.props.postData.user}<span> - {this.props.postData.pet}</span></h3>
                        <div className="col-flex" style={{color: 'grey', alignItems: 'flex-start'}}>
                            <span>Starts in {this.props.postData.time}</span>
                            <span>{this.payment()}</span>
                        </div>
                    </div>
                </div>
                <div className="post-description">
                    <div style={{paddingBottom: '8px'}}>{this.props.postData.description}</div>
                    <div className={'post-buttons col-flex ' + (this.state.shown ? 'show-buttons' : '') }>
                    <span>
                        <button className="icon-button" onClick={() => this.acceptJob()}><MaterialIcon icon="done" size={20} ></MaterialIcon></button>
                    </span>
                    <span>
                        <Link to='/messages'><button className="icon-button" ><MaterialIcon icon="message" size={20} ></MaterialIcon></button></Link>
                    </span>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Post;
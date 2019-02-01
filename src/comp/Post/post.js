import React, { Component } from 'react';
import './style.css'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="post-container row-flex">
                <div style={{backgroundColor: '#EFEFEF', height: '64px', width: '64px', borderRadius: '36px', marginRight: '16px'}}></div>
                <div style={{width: '100%'}} >
                    <h3>{this.props.postData.user}</h3>
                    <div>{this.props.postData.description}</div>
                    <div className="row-flex" style={{marginTop:'4px', color: '#a9a9a9', justifyContent: 'space-between', width: '100%'}}>
                        <span>{this.props.postData.time}</span>
                        <div>
                            <span style={{paddingRight: '36px', color:'#79e2fa'}}>Accept Job</span>
                            <span style={{color:'#79e2fa'}} >Send Message</span>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Post;
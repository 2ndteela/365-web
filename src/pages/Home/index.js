import React, { Component } from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react'
import {Link} from 'react-router-dom'

import './style.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{height: '100%'}}>
                <div className="row-flex" style={{justifyContent: 'space-between', height: '100%'}}>
                    <div className="col-flex" id="user-menu">
                        <MaterialIcon icon="account_circle" size={280} ></MaterialIcon>
                        <div id="home-links" className="col-flex">
                            <div>
                                <div>
                                    <Link to="/pets"><h2>Manage Pets</h2></Link>
                                </div>
                                <div>
                                    <Link to="/account"><h2>Manage Account</h2></Link>
                                </div>
                                <div>
                                    <Link to="/messages"><h2>Chats</h2></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="timeline" className="col-flex"></div>
                </div>
            </div>
         );
    }
}
 
export default Home;
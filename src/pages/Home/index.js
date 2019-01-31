import React, { Component } from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react'

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
                        <MaterialIcon icon="face" size={280} ></MaterialIcon>
                    </div>
                    <div id="timeline"></div>
                </div>
            </div>
         );
    }
}
 
export default Home;
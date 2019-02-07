import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import './style.css'

class RequestDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }

    executeCallback() {
        this.props.callback()
    }

    render() {
    if(!this.props.show) return null
    return( 
        <div>
            <div id="request-dialog-background"></div>
            <div id="dialog-container">
                <div id="dialog" className="col-flex">
                    <div className="row-flex dialog-header">
                        <h3>New Sitter Request</h3>
                        <button className="icon-button">
                            <MaterialIcon icon="clear" onClick={() => this.executeCallback()} />
                        </button>
                    </div>
                    <div id="dialog-body">
                        <select>
                            <option>Miqus</option>
                            <option>Spot</option>
                            <option>Mrs. Stratchers</option>
                        </select>
                    </div>
                    <div id="dialog-buttons">
                        <button className="clear-button" style={{marginRight: '8px'}} >Cancel</button>
                        <button className="primary-button">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default RequestDialog
import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import './style.css'

class RequestDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pet: '',
            salary: '',
            startDate: '',
            startHour: '',
            startMins: '',
            endDate: '',
            endHour: '',
            endMins: '',
            description: ''
        }

    }

    executeCallback() {
        this.setState({
            pet: '',
            salary: '',
            startDate: '',
            startHour: '',
            startMins: '',
            endDate: '',
            endHour: '',
            endMins: '',
            description: ''
        })
        
        this.props.callback()
    }

    updateValue(e, data) {
        this.setState({
            [data] : e.target.value
        })
    }

    post() {
        this.props.postBack(this.state)
    }

    cancel() {
        this.setState({
            pet: '',
            salary: '',
            startDate: '',
            startHour: '',
            startMins: '',
            endDate: '',
            endHour: '',
            endMins: '',
            description: ''
        })
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
                        <button className="icon-button" onClick={() => this.executeCallback()}>
                            <MaterialIcon icon="clear" />
                        </button>
                    </div>
                    <div id="dialog-body">
                        <div className="row-flex" style={{width: '100%'}}>
                            <div className="styled-input">
                                <select style={{width: '98%'}} value={this.state.pet} onChange={e => this.updateValue(e, 'pet')}>
                                    <option>Miqus</option>
                                    <option>Spot</option>
                                    <option>Mrs. Stratchers</option>
                                </select>
                                <div>Pet</div>
                            </div>
                            <div className="styled-input" style={{position: 'relative', top: '1px'}}>
                                <input value={this.state.salary} onChange={e => this.updateValue(e, 'salary')}></input>
                                <div>Salary</div>
                            </div>
                        </div>
                        <div className="row-flex">
                            <div className="col-flex" style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <h4>Start Time</h4>
                                <div className="row-flex" style={{width: '98%'}}>
                                    <div className="styled-input">
                                        <input value={this.state.startDate} onChange={e => this.updateValue(e, 'startDate')}></input>
                                        <div>Date</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.startHour} onChange={e => this.updateValue(e, 'startHour')}></input>
                                        <div>Hour</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.startMins} onChange={e => this.updateValue(e, 'startMins')} ></input>
                                        <div>Mins</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-flex" style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <h4>End Time</h4>
                                <div className="row-flex" style={{width: '98%'}}>
                                    <div className="styled-input">
                                        <input value={this.state.endDate} onChange={e => this.updateValue(e, 'endDate')}></input>
                                        <div>Date</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.endHour} onChange={e => this.updateValue(e, 'endHour')}></input>
                                        <div>Hour</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.endMins} onChange={e => this.updateValue(e, 'endMins')}></input>
                                        <div>Mins</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styled-input">
                            <textarea value={this.state.description} onChange={e => this.updateValue(e, 'description')}></textarea>
                            <div>Description</div>
                        </div>
                    </div>
                    <div id="dialog-buttons">
                        <button className="clear-button" style={{marginRight: '8px'}} onClick={() => this.cancel()} >Clear</button>
                        <button className="primary-button" onClick={() => this.post()}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default RequestDialog
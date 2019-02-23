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
            startMonth: '',
            startYear: '',
            startHour: 6,
            startMins: 0,
            endDate: '',
            endMonth: '',
            endYear: '',
            endHour: 8,
            endMins: 0,
            description: '',
            startDaysArray: [],
            endDaysArray: [],
            animate: false
        }

    }

    executeCallback() {
        document.getElementById('dialog').classList.remove('no-pacity')
        document.getElementById('request-dialog-background').classList.remove('fade-in-back')

        setTimeout(() => {

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

     }, 300)
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

    makeStartDays() {
        const temp = parseInt(this.state.startMonth, 10)
        let daysArr = []
        let reps = 31

        if(temp === 9 || temp === 4 || temp === 6 || temp === 11) reps = 30
        else if (temp === 2) reps = 28

        for(let i = 0; i < reps; i++) daysArr.push(i+1)

            this.setState({
                startDaysArray: daysArr
            })
    }

    makeEndDays() {
        const temp = parseInt(this.state.endMonth, 10)
        let daysArr = []
        let reps = 31

        if(temp === 9 || temp === 4 || temp === 6 || temp === 11) reps = 30
        else if (temp === 2) reps = 28

        for(let i = 0; i < reps; i++) daysArr.push(i+1)

            this.setState({
                endDaysArray: daysArr
            })
    }

    findToday() {
        const NOW = new Date()
        this.setState({
            startYear: NOW.getFullYear(),
            startMonth: NOW.getMonth() + 1,
            startDate: NOW.getDate(),
            endDate: NOW.getDate() + 1,
            endMonth: NOW.getMonth() + 1,
            endYear: NOW.getFullYear()
        })
        this.makeStartDays()
        this.makeEndDays()
    }

    updateMonth(e, start) {
        if(start) {
            this.setState({
                startMonth: e.target.value
            }, this.makeStartDays)
        }
        else {
            this.setState({
                endMonth: e.target.value
            }, this.makeEndDays)
        }
        
    }

    componentDidMount() {
        this.findToday() 
    }

    render() {
    if(!this.props.show) return null   
    return( 
        <div>
            <div id="request-dialog-background"></div>
            <div id="dialog-container">
                <div id="dialog" className={`col-flex`}  >
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
                        <div className="row-flex" style={{ width: '100%', justifyContent: 'space-between'}}>
                            <div className="col-flex" style={{justifyContent: 'flex-start', alignItems: 'flex-start', width: '50%'}}>
                                <h4 style={{paddingBottom: '8px'}}>Start Time</h4>
                                <div className="col-flex" style={{width: '100%'}}>
                                    <div className="row-flex" style={{width: '100%'}}>
                                        <div style={{width: '33%'}} className="styled-input">
                                            <select value={this.state.startMonth} onChange={(e) => this.updateMonth(e, true)} style={{width: '100%'}}>
                                                <option value={1}>Jan</option>
                                                <option value={2}>Feb</option>
                                                <option value={3}>Mar</option>
                                                <option value={4}>Apr</option>
                                                <option value={5}>May</option>
                                                <option value={6}>Jun</option>
                                                <option value={7}>Jul</option>
                                                <option value={8}>Aug</option>
                                                <option value={9}>Sep</option>
                                                <option value={10}>Nov</option>
                                                <option value={11}>Oct</option>
                                                <option value={12}>Dec</option>
                                            </select>
                                            <div>Month</div>
                                        </div>
                                        <div style={{width: '33%'}} className="styled-input">
                                            <select value={this.state.startDate} onChange={(e) => this.updateValue(e, 'startDate')} style={{width: '100%'}}>
                                                {this.state.startDaysArray.map(day => <option key={day + ' day'} >{day}</option>)}
                                            </select>
                                            <div>Date</div>
                                        </div>
                                        <div style={{width: '34%'}} className="styled-input">
                                        <select value={this.state.startYear} onChange={(e) => this.updateValue(e, 'startYear')} style={{width: '100%'}} >
                                                <option>{this.state.startYear}</option>
                                                <option>{this.state.startYear + 1}</option>
                                                <option>{this.state.startYear + 2}</option>
                                            </select>
                                            <div>Year</div>
                                        </div>
                                    </div>
                                    <div className="row-flex" style={{width: '100%'}} >
                                        <div className="styled-input">
                                            <select value={this.state.startHour} onChange={e => this.updateValue(e, 'startHour')}>
                                                <option value={6}>6am</option>
                                                <option value={7}>7am</option>
                                                <option value={8}>8am</option>
                                                <option value={9}>9am</option>
                                                <option value={10}>10am</option>
                                                <option value={11}>11am</option>
                                                <option value={12}>12am</option>
                                                <option value={13}>1pm</option>
                                                <option value={14}>2pm</option>
                                                <option value={15}>3pm</option>
                                                <option value={16}>4pm</option>
                                                <option value={17}>5pm</option>
                                                <option value={18}>6pm</option>
                                                <option value={19}>7pm</option>
                                                <option value={20}>8pm</option>
                                                <option value={21}>9pm</option>
                                                <option value={22}>10pm</option>
                                                <option value={23}>11pm</option>
                                                <option value={24}>12pm</option>
                                                <option value={1}>1am</option>
                                                <option value={2}>2am</option>
                                                <option value={3}>3am</option>
                                                <option value={4}>4am</option>
                                                <option value={5}>5am</option>
                                            </select>
                                            <div>Hour</div>
                                        </div>
                                        <div className="styled-input">
                                            <select value={this.state.startMins} onChange={e => this.updateValue(e, 'startMins')}>
                                                <option value={0} >00</option>
                                                <option value={15} >15</option>
                                                <option value={30} >30</option>
                                                <option value={45} >45</option>
                                            </select>
                                            <div>Mins</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-flex" style={{justifyContent: 'flex-start', alignItems: 'flex-start',width: '49%' }}>
                                <h4 style={{paddingBottom: '8px'}}>End Time</h4>
                                <div className="col-flex" style={{width: '100%'}}>
                                <div className="row-flex" style={{width: '100%'}}>
                                        <div style={{width: '33%'}} className="styled-input">
                                            <select value={this.state.endMonth} onChange={(e) => this.updateMonth(e, false)} style={{width: '100%'}}>
                                                <option value={1}>Jan</option>
                                                <option value={2}>Feb</option>
                                                <option value={3}>Mar</option>
                                                <option value={4}>Apr</option>
                                                <option value={5}>May</option>
                                                <option value={6}>Jun</option>
                                                <option value={7}>Jul</option>
                                                <option value={8}>Aug</option>
                                                <option value={9}>Sep</option>
                                                <option value={10}>Nov</option>
                                                <option value={11}>Oct</option>
                                                <option value={12}>Dec</option>
                                            </select>
                                            <div>Month</div>
                                        </div>
                                        <div style={{width: '33%'}} className="styled-input" >
                                            <select value={this.state.endDate} onChange={(e) => this.updateValue(e, 'endDate')} style={{width: '100%'}}>
                                                {this.state.endDaysArray.map(day => <option key={day + ' day'} >{day}</option>)}
                                            </select>
                                            <div>Date</div>
                                        </div>
                                        <div style={{width: '34%'}} className="styled-input">
                                            <select value={this.state.endYear} onChange={(e) => this.updateValue(e, 'endYear')} style={{width: '100%'}} >
                                                <option>{this.state.startYear}</option>
                                                <option>{this.state.startYear + 1}</option>
                                                <option>{this.state.startYear + 2}</option>
                                            </select>
                                            <div>Year</div>
                                        </div>
                                    </div>
                                    <div className="row-flex" style={{width: '100%'}}>
                                        <div className="styled-input">
                                        <select value={this.state.endHour} onChange={e => this.updateValue(e, 'endHour')}>
                                                <option value={6}>6am</option>
                                                <option value={7}>7am</option>
                                                <option value={8}>8am</option>
                                                <option value={9}>9am</option>
                                                <option value={10}>10am</option>
                                                <option value={11}>11am</option>
                                                <option value={12}>12am</option>
                                                <option value={13}>1pm</option>
                                                <option value={14}>2pm</option>
                                                <option value={15}>3pm</option>
                                                <option value={16}>4pm</option>
                                                <option value={17}>5pm</option>
                                                <option value={18}>6pm</option>
                                                <option value={19}>7pm</option>
                                                <option value={20}>8pm</option>
                                                <option value={21}>9pm</option>
                                                <option value={22}>10pm</option>
                                                <option value={23}>11pm</option>
                                                <option value={24}>12pm</option>
                                                <option value={1}>1am</option>
                                                <option value={2}>2am</option>
                                                <option value={3}>3am</option>
                                                <option value={4}>4am</option>
                                                <option value={5}>5am</option>
                                            </select>
                                            <div>Hour</div>
                                        </div>
                                        <div className="styled-input">
                                            <select value={this.state.endMins} onChange={e => this.updateValue(e, 'endMins')} >
                                                <option value={0} >00</option>
                                                <option value={15} >15</option>
                                                <option value={30} >30</option>
                                                <option value={45} >45</option>
                                            </select>
                                            <div>Mins</div>
                                        </div>
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
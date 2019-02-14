import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    setActive(idx) {
        const temp = this.state.jobdata

        temp.forEach(jobdata => {
            if (jobdata.current) jobdata.current = false
        })

        temp[idx].current = true

        this.setState({
            chats: temp
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} className="row-flex">
                <div id="jobs-menu">
                    <div id="back-home">
                        <Link to="/" >Home</Link>
                    </div>
                </div>
                <div id="jobs">
                    <div id="jobs-composer">
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;
import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'
import {Link} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import Post from '../../comp/Post/post' ;

import './style.css'
import { FormControl, InputLabel, Select, Button, Input, MenuItem, OutlinedInput } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: { main:'#FF3B3F' },
      secondary: {
        main: '#f44336',
      },
    }, 
})


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
                    <div id="timeline" className="col-flex">
                        <div id="timeline-header" className="row-flex" style={{justifyContent: 'space-between'}}>
                            <Button variant="contained" color="primary" >New Sitter Request</Button>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="filter-simple">Sort:</InputLabel>
                                    <Select
                                        value={this.state.filter}
                                        onChange={(e) => this.updateValue(e, 'filter')}
                                        input = {
                                            <OutlinedInput name="filter" id="filter-simple"></OutlinedInput>
                                        }
                                    >
                                        <MenuItem value="Newest">Newest</MenuItem>
                                        <MenuItem value="Paid">Paid</MenuItem>
                                    </Select>
                                </FormControl>
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
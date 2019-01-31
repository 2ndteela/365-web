import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Account from './pages/Account'
import Messages from './pages/Messages'
import Pets from  './pages/Pets'
import { createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="header-content">
              <h1>Sitter Space</h1>
          </div>
        </div>
        <Router>
          <div id='page-content' >
            <Route exact path="/" component={Home}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/messages" component={Messages}></Route>
            <Route path="/pets" component={Pets} ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

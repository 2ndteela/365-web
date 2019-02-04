import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home/'
import Account from './pages/Account'
import Messages from './pages/Messages'
import Pets from  './pages/Pets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div id="router-div">
            <div id="header">
              <div id="header-content">
                  <h1>Sitter Space</h1>
                  <div className="row-flex">
                    <div className="header-link">
                      <Link to="/messages">Messages</Link>
                    </div>
                    <div className="header-link">
                      <Link to="/account">Account</Link>
                    </div>
                    <div className="header-link">
                      <Link to="/pets">Pets</Link>
                    </div>
                    <div className="header-link">
                      <Link to="/jobs">Jobs</Link>
                    </div>
                  </div>
              </div>
            </div>
              <div id='page-content' >
                <Route exact path="/" component={Home}></Route>
                <Route path="/account" component={Account}></Route>
                <Route path="/messages" component={Messages}></Route>
                <Route path="/pets" component={Pets} ></Route>
              </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

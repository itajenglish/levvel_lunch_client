import React, { Component } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from "./components/home/components/homeView";
import Header from "./common/header";
import Footer from "./common/footer";
import SignupView from './components/signup/components/signupView';
import LoginView from './components/login/components/loginView';

import "./App.css";

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Header {...this.props} />
        <div className="main">
          <main>
            <Switch {...this.props}>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignupView} />
              <Route path="/login" component={LoginView} />
            </Switch>
          </main>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);

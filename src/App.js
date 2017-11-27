import React, { Component } from "react";
import Main from "./common/main";
import Header from "./common/header";
import Footer from "./common/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

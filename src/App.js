import React, { Component } from 'react';
import Main from './common/main';
import Header from './common/header'
import Footer from './common/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;

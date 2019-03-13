import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Header } from './components/header';
import './scss/sasstest.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
          <NavBar />
        </header>
        <div id="mainContent" className="container">
          <h1>Hello World!</h1>
        </div>
      </div>
    );
  }
}

export default App;

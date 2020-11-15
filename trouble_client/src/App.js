import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Initialize state
  state = { msg: 'Waiting for backend' }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getHello();
  }

  getHello = () => {
    // Get the passwords and store them in state
    fetch('/api/hello')
      .then(res => res.json())
      .then(text => this.setState({ msg: text.text }));
  }


   render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.msg}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/** Main React App component
 * @extends Component
 */
class App extends Component {
  /** @private Internal state - message shown to user */
  state = { msg: 'Waiting for backend' }

  componentDidMount() {
    // Fetch passwords after first mount
    this.getHello();
  }

  /** Get Hello World text from backend */
  getHello = () => {
    // Get the passwords and store them in state
    fetch('/api/hello')
      .then(res => res.json())
      .then(text => this.setState({ msg: text.text }));
  }

  /** Render the app */
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

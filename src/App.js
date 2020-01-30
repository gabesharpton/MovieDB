import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    toggle: true
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Welcome text="Hi React" />
        
      </header>
      <p>Button Testing
      </p>
      <button>Show/hide</button>
    </div>
  );
}
}
class Welcome extends Component{

  render(){
    const {text} = this.props;
  return(
    <div>{text}</div>
  )
  }
}

export default App;


import logo from './logo.svg';
import './App.css';
import KeyPad from './components/KeyPad';
import Output from './components/Output';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       result: ''
    }
  }

  buttonPressed = (buttonName) => {
    if(buttonName === '='){
      this.calculator();
    }else if( buttonName === "C"){
      this.reset()
    }else if(buttonName === "CE"){
      this.backspace()
    }
    else{
    this.setState({
      result: this.state.result + buttonName 
      })
    }
}
backspace = () => {
  this.setState({
    result: this.state.result.slice(0, -1)
  })
}

reset = () => {
  this.setState({
    result: ""
  })
}
  calculator = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }
  
  
  render() {
    return (
      <div className="App calc-body">
        <h1>Calculator</h1>
        <Output result={this.state.result} />
        <KeyPad buttonPressed={this.buttonPressed} />
        
      </div>
    )
  }
}

export default App


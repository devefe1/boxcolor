import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
      clickCounter: 0
    }
  }



  render() {
    return (
      <div className="App">
        <h1> Box color change .</h1>
          <div className="colorBox"
            style={{backgroundColor: this.state.color}}
            onClick={this.onChange}
          >
        <p className = "Click"> Click Here </p>
        </div>
      </div>
    )
  }
}

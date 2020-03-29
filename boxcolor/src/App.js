import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'blue',
      clickCounter: 0
    }
  }

  onChange = (e) => {
    this.setState({
      color: 'aquamarine',
      clickCounter: this.state.clickCounter++
    })
    console.log("click counter ===> ", this.state.clickCounter)
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

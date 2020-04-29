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
 
  onChange = (e) => {
    this.setState({
      color: 'gold',
      clickCounter: this.state.clickCounter++
    })
    console.log("click counter ===> ", this.state.clickCounter)
  }


  render() {
    return (
      <div className="App">
        <h1> Color Box change .</h1>
          <div className="box"
            style={{backgroundColor: this.state.color}}
            onClick={this.onChange}>
        </div>
      </div>
    )
  }
}

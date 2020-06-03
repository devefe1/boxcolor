import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      color: 'blue', 
      clickCounter: 0
     };
  }



  handleColor = () => {
    if (this.state.color === 'blue') {
      this.setState({color: 'orange', clickCounter: this.state.clickCounter + 1})
    } else {
      this.setState({color: 'blue', clickCounter: this.state.clickCounter + 1})
    }
  }

  render() {
    const {clickCounter} = this.state;
    return (
      <div className='App' >
       <h1 id='count' > {`click count: ${clickCounter}`} </h1>
        <h1 id='title' > Box color change . </h1>
        <div 
        className='colorBox' 
        style={{backgroundColor: this.state.color}}
        onClick={this.handleColor}
        >
          <p> Click Here </p>
        </div>
      </div>
    );
  }
}


// Order of operations:

// Create a class component
// Set a default state within a constructor for color to blue and clickCounter to 0
// create a function called handleColor that will update the state of color and clickCounter
// create an if statement 'if color is blue, using setState change color to orange and increment clickCounter by 1
// create and else statement 'using setState change color to blue and increment clickCounter by 1
// pass a reference to that function in a div 
// using css create a box calling the className of that same div

export default App;
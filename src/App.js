import React from "react"

/*
    WRONG: works, but use a method in the class instead
    (You wounldn't need "this" in front of the event handler.)
function handleButtonClick() {
  console.log("Click");
}
*/

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // Bind method
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /*
    Your method should be inside the class.
    There is no need to create a function outside the class
  */
  handleButtonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleButtonClick}>Change!</button>
      </div>
    )
  }
}

export default App;

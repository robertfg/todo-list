import React, {Component} from "react";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

// function App() {
//   return (
//     <div>
//       Code goes here
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let buttonText  = this.state.isLoggedIn ? "Log Out"   : "Log In";
    let logText     = this.state.isLoggedIn ? "Logged In" : "Logged Out";

    return (
      <div>
        <h1>{logText}</h1>
        <br />
        <button onClick={this.handleButtonClick}>{buttonText}</button>
      </div>
    );
  }
}

export default App;

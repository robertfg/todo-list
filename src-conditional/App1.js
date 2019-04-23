import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500);
  }

  render() {
    return (
      <div>
        {
          this.state.unreadMessages.length > 0  &&
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
          // this.state.unreadMessages.length > 0
          //   ? <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
          //   : null
        }
      </div>
    );
  }
}

export default App;

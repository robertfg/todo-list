import React from "react"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes"
    }

  }

  render() {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
        {/* Passing state down through props */}
        {/*<ChildComponent answer={this.state.answer}/>*/}
      </div>
    )
  }
}

export default App

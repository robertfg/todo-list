import React, { Component } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    }
  }

  // After you fetch data, you need to set state
  componentDidMount() {
    this.setState({
      loading: true
    });

    // Get Luke Skywalker
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => {
      this.setState({
        loading: false,
        character: data
      });
    });
  }

  render() {
    const msgText = this.state.loading ? "Loading..." : this.state.character.name;

    return(
      <div>
        <h1>{msgText}</h1>
      </div>
    );
  }
}

export default App;

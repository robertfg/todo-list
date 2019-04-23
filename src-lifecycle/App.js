import React, {Component} from "react";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // Get data to display.
  }

  // DEPRECATED
  // componentWillMount() {
  //
  // }

  static getDerivedStateFromProps(props, state) {
      // return the new, updated state based upon the props
      // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
      // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
      // create a backup of the current way things are
      // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // DEPRECATED
  // componentWillReceiveProps(nextProps) {
  unsafe_componentWillReceiveProps(nextProps) {
    // if (nextProps.whatever !== this.props.whatever) {
    //   do something...
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Return true to update component
    // Return false not to update
  }

  componentWillUnmount() {
    // Tear down or clean up code before component disappears,
    // e.g., remove event listener
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    );
  }
}

export default App;

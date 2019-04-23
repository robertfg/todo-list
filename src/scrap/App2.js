import React, { Component } from 'react';

// Controlled Form

class App extends Component {
  constructor() {
    super();

    // From "Name" property:
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      sex: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // const {name, value} = event.target
    // this.setState({
    //   [name]: value,
    //   isFriendly: true
    // })

    // We need "type" to determine how to set the name field.
    const {name, value, type, checked} = event.target;

    // If checkbox, set the name to the value of checked; otherwise to value
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {

  }

  render() {
    return(
      <form onSubmit= {this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />

        <br />

        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        <br />
        <br />

        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="sex"
            value="male"
            checked={this.state.sex === "male"}
            onChange={this.handleChange}
            /> Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="sex"
            value="female"
            checked={this.state.sex === "female"}
            onChange={this.handleChange}
          /> Female
        </label>

        {/* Formik: React form library */}

        <br />
        <br />

        <label>
          Favorite Color:
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>

        <button>Submit</button>
      </form>
    );
  }
}

export default App;

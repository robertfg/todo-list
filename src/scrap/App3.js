import React, { Component } from 'react';

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      sex: "",
      destination: "",
      // isVegan: false,
      // isKosher: false,
      // isLactoseFree: false
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target;

    type === "checkbox"
      ? this.setState(prevState => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked
            }
          }
        })
      // ? this.setState({
      //     [name]: checked
      //   })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
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

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />

          <br />

          {/* Create radio buttons for gender here */}
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

          <br />
          <br />

          {/* Create select box for location here */}
          <label>
            Destination:
            <select
              value={this.state.destination}
              onChange={this.handleChange}
              name="destination"
            >
              <option value="">-- Please choose a destination --</option>
              <option value="New York">New York</option>
              <option value="Louisville">Louisville</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </label>

          <br />
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestrictions.isVegan}
              // checked={this.isVegan}
              onChange={this.handleChange}
            /> Vegan
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              // checked={this.state.isKosher}
              onChange={this.handleChange}
            /> Kosher
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              // checked={this.state.isLactoseFree}
              onChange={this.handleChange}
            /> Lactose Free
          </label>

          <br />
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your sex: {this.state.sex}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        {/*<p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>*/}
        {/*<p>{this.state.isVegan ? "Vegan" : ""}</p>
        <p>{this.state.isKosher ? "Kosher" : ""}</p>
        <p>{this.state.isLactoseFree ? "Lactose Free" : ""}</p>*/}
        <p>{this.state.dietaryRestrictions.isVegan ? "Vegan" : ""}</p>
        <p>{this.state.dietaryRestrictions.isKosher ? "Kosher" : ""}</p>
        <p>{this.state.dietaryRestrictions.isLactoseFree ? "Lactose Free" : ""}</p>
      </main>
    );
  }
}

export default App;

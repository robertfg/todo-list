import React from 'react';

function FormComponent(props) {
  // If you use the data object, then you need to use props.data instead of props;

  return (
    <main>
      <form>
        <input
          type="text"
          value={props.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />

        <br />

        <input
          type="text"
          value={props.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />

        <br />

        <input
          name="age"
          value={props.age}
          onChange={props.handleChange}
          placeholder="Age"
        />

        <br />

        {/* Create radio buttons for gender here */}
        <label>
          <input
            type="radio"
            name="sex"
            value="male"
            checked={props.sex === "male"}
            onChange={props.handleChange}
            /> Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="sex"
            value="female"
            checked={props.sex === "female"}
            onChange={props.handleChange}
          /> Female
        </label>

        <br />
        <br />

        {/* Create select box for location here */}
        <label>
          Destination:
          <select
            value={props.destination}
            onChange={props.handleChange}
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
            checked={props.dietaryRestrictions.isVegan}
            onChange={props.handleChange}
          /> Vegan
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.dietaryRestrictions.isKosher}
            onChange={props.handleChange}
          /> Kosher
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.dietaryRestrictions.isLactoseFree}
            onChange={props.handleChange}
          /> Lactose Free
        </label>

        <br />
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {props.firstName} {props.lastName}</p>
      <p>Your age: {props.age}</p>
      <p>Your sex: {props.sex}</p>
      <p>Your destination: {props.destination}</p>
      <p>Your dietary restrictions:</p>
      <p>{props.dietaryRestrictions.isVegan ? "Vegan" : ""}</p>
      <p>{props.dietaryRestrictions.isKosher ? "Kosher" : ""}</p>
      <p>{props.dietaryRestrictions.isLactoseFree ? "Lactose Free" : ""}</p>
    </main>
  );
}

export default FormComponent;

// import React, { Component } from 'react';
import React  from 'react';

// I don't need to pass props

// I prefer when I import { Component }
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

// function Header(props) {
//   return (
//     <header>
//       <p>Welcome, {props.username}!</p>
//     </header>
//   )
// }

export default Header;

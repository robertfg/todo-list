import React from "react";

function Header() {
  return(
    <header>
      <ul className="navbar">
        <li className="navbar__item">About</li>
        <li className="navbar__item">Blog</li>
        <li className="navbar__item">Contact</li>
      </ul>
    </header>
  );
}

// className is under the hood:
// document.getElementById("something").className += " new-class-name"
// document.getElementById("something").classList += " new-class-name"

export default Header;

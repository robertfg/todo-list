import React from "react"

function handleClick() {
  console.log("I was clicked again.")
}

function handleMouseOver() {
  console.log("I was moused over.")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" alt="dopey pic" onMouseOver={handleMouseOver} />
      <br />
      <br />
      <button onClick={() => console.log("I was clicked!")}>Click me</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App

import React from "react";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="jokes">
      <Joke
        punchLine = "PL1"
      />

      <Joke
        question  = "Q1"
        punchLine = "A1"
      />

      <Joke
        question  = "Q2"
        punchLine = "A2"
      />

      <Joke
        question  = "Q3"
        punchLine = "A3"
      />

      <Joke
        question  = "Q4"
        punchLine = "A4"
      />

      <Joke
        question  = "Q5"
        punchLine = "A5"
      />
    </div>
  )
}

export default App;

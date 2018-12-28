import React from "react";

function Joke(props) {
  return (
    <div className="joke">
      <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
      {/* <p style={{display: !props.question && "none"}}>Question: {props.question}</p>*/}
      <p style={{fontStyle: props.question ? "normal" : "italic"}}>Answer: {props.punchLine}</p>
      <hr />
    </div>
  );
}

export default Joke;

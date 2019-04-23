import React from "react";

// Better to put logic in App
function Conditional() {
  return <h1>Some cool stuff about conditional rendering</h1>
}

// function Conditional(props) {
  // if(props.isLoading === true) {
  //   return (
  //     <h1>Loading...</h1>
  //   );
  // }
  // return (
  //   <h1>Some cool stuff about conditional rendering</h1>
  // );

  // Ternary
  // return props.isLoading === true
  //   ? <h1>Loading...</h1>
  //   : <h1>Some cool stuff about conditional rendering</h1>

  // Wrap JSX in {}
  // return (
  //   <div>
  //     <h1>Other Text</h1>
  //     {props.isLoading
  //       ? <h1>Loading...</h1>
  //       : <h1>Some cool stuff about conditional rendering</h1>}
  //   </div>
  // );
// }


export default Conditional;

import React from 'react';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <h1>Good {timeOfDay}!</h1>
  );
}


// function App() {
//   const firstName = "Robert";
//   const lastName = "Glover";
//
//   return (
//     <h1>Hello {`${firstName} ${lastName}`}!</h1>
//   )
// }

// const App = () => <h1>Hello world!</h1>;

export default App;

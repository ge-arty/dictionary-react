import React from "react";

function App() {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/table")
    .then((res) => res.json())
    .then((res) => console.log(res));

  return <div className="App"></div>;
}

export default App;

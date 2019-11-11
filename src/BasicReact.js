import React from "react";
import ReactDOM from "react-dom";

//import "./styles.css";

function App({ firstName }) {
  return <div className="App">Hello {firstName}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App firstName="Subham" />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import ServiceTable from "./ServiceTable/ServiceTable";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ServiceTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

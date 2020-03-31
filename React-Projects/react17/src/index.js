import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";


ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));

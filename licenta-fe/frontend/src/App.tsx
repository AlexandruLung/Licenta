import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./components/table.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/logincomponent/login.component";
import RegisterComponent from "./components/registrecomponent/register.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TableComponent}></Route>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/register" component={RegisterComponent}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

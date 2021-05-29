import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./components/table.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/logincomponent/login.component";
import RegisterComponent from "./components/registrecomponent/register.component";
import MainPage from "./components/mainpagecomponent/mainpagecompoinent";
import AdvancedFilters from "./advancedfilters/advancedfilter.component";
import CustomFilters from "./customfilters.component";
import WelcomePage from "./components/welcome-page.componet/welcomepage.comonent";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={WelcomePage}></Route>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/register" component={RegisterComponent}></Route>
          <Route path="/mainpage" component={MainPage}></Route>
          <Route path="/table" component={TableComponent}></Route>
          <Route path="/advanced-filters" component={AdvancedFilters} />
          <Route path="/custom-filters" component={CustomFilters} />
          <Route path="/welcome-page" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

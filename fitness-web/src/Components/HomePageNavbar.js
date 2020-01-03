import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";
import NoMatch from "./NoMatch";

// const styles = styled.div`
// .navbar{
//     background-color
// }

// `;

class HomePageNavbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route component={NoMatch}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default HomePageNavbar;

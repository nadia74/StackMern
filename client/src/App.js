import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { LoginSout } from "./components/Login/LoginSout.js";
import { Signup } from "./components/Signup/Signup.js";
import { Navigbar } from "./components/Navbar/Navbar.js";
import { NavigbarPrivate } from "./components/NavbarPrivate/NavbarPrivate.js";
import { Message } from "./components/Message/Message.js";
import { Welcome } from "./components/Welcome/Welcome.js";
import { Profile } from "./components/Profile/Profile.js";
import { error404 } from "./components/404/404.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import "./App.css";

class App extends Component {
  render() {
    return (
     
      <div>
      <Route component={Navigbar} />
      <Route component={NavigbarPrivate} />

      
      <div className="App">
        <div className="App-content">
      
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginSout} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/404" component={error404} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
            < PrivateRoute path="/profile" component={Profile} />
            < PrivateRoute path="/message" component={Message} />
            <Redirect to="/404" />

          </Switch>
        </div>
      </div>
    </div>
    );
  }
}
export default App;
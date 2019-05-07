import React from "react";
import "react-bulma-components";
import "./App.css";
import "moment-timezone";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/partials/NavMain";
import Index from "./components/index/Index";
import Profile from "./components/profile/Profile";
import Register from "./components/login&register/Register";
import Login from "./components/login&register/Login";
import Dashboard from "./components/dashboard/Dashboard";

// import Layout from "./components/chat/Layout";

/* <Layout className="chat" /> */

function App() {
  return (
    <div className="App has-background-white-bis">
      <nav>
        <Navbar />
      </nav>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

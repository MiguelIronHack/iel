import React from "react";
import "./App.css";
import "moment-timezone";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/partials/NavMain";
import Index from "./components/index/Index";
import Profile from "./components/profile/Profile";
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
      </Switch>
    </div>
  );
}

export default App;

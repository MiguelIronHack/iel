import React from "react";
import "./App.css";
import "moment-timezone";
import Navbar from "./components/partials/NavMain";
import Index from "./components/index/Index";
// import Layout from "./components/chat/Layout";

function App() {
  return (
    <div className="App">
      {/* <Layout className="chat" /> */}
      <Navbar />
      <Index />
    </div>
  );
}

export default App;

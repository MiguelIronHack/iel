import React from "react";
import "./App.css";
import "moment-timezone";
import Navbar from "./components/partials/NavMain";
import Index from "./components/index/Index";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index />
      <Layout />
    </div>
  );
}

export default App;

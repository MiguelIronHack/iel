import React from "react";
import Navbar from "./components/partials/NavMain";
import Index from "./components/index/Index";
import "./App.css";
import "moment-timezone";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index />
    </div>
  );
}

export default App;

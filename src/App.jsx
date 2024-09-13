import React from "react";
import GetLinked from "./Pages/GetLinked";
import { Router, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <div>
        <GetLinked />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

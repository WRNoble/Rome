import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={EmperorList} />
          <Route path="/addemperor" exact component={AddEmperor} />
          <Route path="/updateemperor" exact component={EditEmperor} />
        </div>
      </Router>
    </div>
  );
}

export default App;

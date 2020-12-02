import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import EmperorList from "./components/EmperorList";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={EmperorList} />
          {/* <Route path="/addemperor" exact component={AddEmperor} />
          <Route path="/updateemperor" exact component={EditEmperor} /> */}
          {/* <Route path="/city" exact component={CityList} /> */}
          {/* <Route path="/addcity" exact component={AddCity} />
          <Route path="/updatecity" exact component={EditCity} /> */}
          {/* <Route path="/politician" exact component={PoliticianList} />
          <Route path="/enemy" exact component={EnemyList} />
          <Route path="/legion" exact component={LegionList} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;

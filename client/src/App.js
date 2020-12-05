import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import EmperorList from "./components/EmperorList";
import PoliticianList from "./components/PoliticianList";
import EnemyList from "./components/EnemyList";
import LegionList from "./components/LegionList";
import CityList from "./components/CityList";
import EditEmperor from "./components/EditEmperor";
import EditPolitician from "./components/EditPolitician";
import EditEnemy from "./components/EditEnemy";
import EditLegion from "./components/EditLegion";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={EmperorList} />
        <Route path="/updateemperor/:id" component={EditEmperor} />
        <Route path="/politicians" component={PoliticianList} />
        <Route path="/updatepolitician/:id" component={EditPolitician} />
        <Route path="/enemies" component={EnemyList} />
        <Route path="/updateenemy/:id" component={EditEnemy} />
        <Route path="/legions" component={LegionList} />
        <Route path="/updatelegion/:id" component={EditLegion} />
        <Route path="/cities" component={CityList} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//components
import Navbar from "./components/Navbar";
import EmperorList from "./components/lists/EmperorList";
import PoliticianList from "./components/lists/PoliticianList";
import EnemyList from "./components/lists/EnemyList";
import LegionList from "./components/lists/LegionList";
import CityList from "./components/lists/CityList";
//Editing components
import EditEmperor from "./components/update/EditEmperor";
import EditPolitician from "./components/update/EditPolitician";
import EditEnemy from "./components/update/EditEnemy";
import EditLegion from "./components/update/EditLegion";
import EditCity from "./components/update/EditCity";
//Adding components
import AddEmperor from "./components/add/AddEmperor";
import AddPolitician from "./components/add/AddPolitician";
import AddEnemy from "./components/add/AddEnemy";
import AddLegion from "./components/add/AddLegion";
import AddCity from "./components/add/AddCity";
//More Info
import InfoEmperor from "./components/info/InfoEmperor";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={EmperorList} />
        <Route path="/updateemperor/:id" component={EditEmperor} />
        <Route path="/addemperor/" component={AddEmperor} />
        <Route path="/emperorinfo/" component={InfoEmperor} />
        <Route path="/politicians" component={PoliticianList} />
        <Route path="/updatepolitician/:id" component={EditPolitician} />
        <Route path="/addpolitician/" component={AddPolitician} />
        <Route path="/enemies" component={EnemyList} />
        <Route path="/updateenemy/:id" component={EditEnemy} />
        <Route path="/addenemy/" component={AddEnemy} />
        <Route path="/legions" component={LegionList} />
        <Route path="/updatelegion/:id" component={EditLegion} />
        <Route path="/addlegion/" component={AddLegion} />
        <Route path="/cities" component={CityList} />
        <Route path="/updatecity/:id" component={EditCity} />
        <Route path="/addcity/" component={AddCity} />
      </div>
    </Router>
  );
}

export default App;

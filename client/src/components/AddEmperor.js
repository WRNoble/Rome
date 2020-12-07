import React, { Component } from "react";
import axios from "axios";

export default class AddEmperor extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeYearBorn = this.onChangeYearBorn.bind(this);
    this.onChangeRiseToPower = this.onChangeRiseToPower.bind(this);
    this.onChangeRiseToPowerYear = this.onChangeRiseToPowerYear.bind(this);
    this.onChangeDeath = this.onChangeDeath.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeAccomplishments = this.onChangeAccomplishments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      yearBorn: "",
      riseToPower: "",
      riseToPowerYear: "",
      death: "",
      bio: "",
      accomplishments: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5003/emperors/").catch((err) => {
      console.log("Error: " + err);
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeYearBorn(e) {
    this.setState({
      yearBorn: e.target.value,
    });
  }

  onChangeRiseToPower(e) {
    this.setState({
      riseToPower: e.target.value,
    });
  }

  onChangeRiseToPowerYear(e) {
    this.setState({
      riseToPowerYear: e.target.value,
    });
  }

  onChangeDeath(e) {
    this.setState({
      death: e.target.value,
    });
  }

  onChangeBio(e) {
    this.setState({
      bio: e.target.value,
    });
  }

  onChangeAccomplishments(e) {
    this.setState({
      accomplishments: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const emperor = {
      name: this.state.name,
      yearBorn: this.state.yearBorn,
      riseToPower: this.state.riseToPower,
      riseToPowerYear: this.state.riseToPowerYear,
      death: this.state.death,
      bio: this.state.bio,
      accomplishments: this.state.accomplishments,
    };

    axios.post("http://localhost:5003/emperors/addemperor", emperor);

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h2> Add Emperor </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Birth Year: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.yearBorn}
              onChange={this.onChangeYearBorn}
            />
          </div>
          <div className="form-group">
            <label>Rise To Power: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.riseToPower}
              onChange={this.onChangeRiseToPower}
            />
          </div>
          <div className="form-group">
            <label>Year Came To Power: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.riseToPowerYear}
              onChange={this.onChangeRiseToPowerYear}
            />
          </div>
          <div className="form-group">
            <label>Death: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.death}
              onChange={this.onChangeDeath}
            />
          </div>
          <div className="form-group">
            <label>Bio: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.bio}
              onChange={this.onChangeBio}
            />
          </div>
          <div className="form-group">
            <label>Accomplishments: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.Accomplishments}
              onChange={this.onChangeAccomplishments}
            />
          </div>
          <button type="submit" value="Add Emperor" className="btn btn-warning">
            Add Emperor
          </button>
        </form>
      </div>
    );
  }
}

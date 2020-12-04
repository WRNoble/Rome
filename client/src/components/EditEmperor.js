import React, { Component } from "react";
import axios from "axios";

export default class EditEmperor extends Component {
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

  render() {
    return (
      <div className="container">
        <h2>Edit Emperor</h2>
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
              onChange={this.onChangeRiseToPowerYear}
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
              value={this.state.accomplishments}
              onChange={this.onChangeAccomplishments}
            />
          </div>
        </form>
      </div>
    );
  }
}

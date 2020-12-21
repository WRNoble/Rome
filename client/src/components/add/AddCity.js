import React, { Component } from "react";
import axios from "axios";

export default class AddCity extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeYearFounded = this.onChangeYearFounded.bind(this);
    this.onChangePopulation = this.onChangePopulation.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      yearFounded: "",
      population: "",
      province: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5003/cities/").catch((err) => {
      console.log("Error: " + err);
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeYearFounded(e) {
    this.setState({
      yearFounded: e.target.value,
    });
  }

  onChangePopulation(e) {
    this.setState({
      population: e.target.value,
    });
  }

  onChangeProvince(e) {
    this.setState({
      province: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const city = {
      name: this.state.name,
      yearFounded: this.state.yearFounded,
      population: this.state.population,
      province: this.state.province,
    };

    axios.post("http://localhost:5003/cities/addcity", city);

    window.location = "/cities";
  }

  render() {
    return (
      <div className="container">
        <h2> Add City </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Year Founded: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.yearFounded}
              onChange={this.onChangeYearFounded}
            />
          </div>
          <div className="form-group">
            <label>Population: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.population}
              onChange={this.onChangePopulation}
            />
          </div>
          <div className="form-group">
            <label>Province: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.province}
              onChange={this.onChangeProvince}
            />
          </div>
          <button type="submit" value="Add City" className="btn btn-warning">
            Add City
          </button>
        </form>
      </div>
    );
  }
}

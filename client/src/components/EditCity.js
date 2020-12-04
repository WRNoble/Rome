import React, { Component } from "react";
import axios from "axios";

export default class EditCity extends Component {
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
    axios
      .get("http://localhost:5003/cities/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          yearFounded: res.data.yearFounded,
          population: res.data.population,
          province: res.data.province,
        });
      })
      .catch((err) => {
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
    console.log(city);

    axios
      .post(
        "http://localhost:5003/cities/updatecity/" + this.props.match.params.id,
        city
      )
      .then((res) => console.log(res.data));

    window.location = "/cities";
  }

  render() {
    return (
      <div className="container">
        <h2>Edit City</h2>
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
              value={this.state.yearFounded}
              onChange={this.onChangeYearFounded}
            />
          </div>
          <div className="form-group">
            <label>Rise To Power: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.population}
              onChange={this.onChangePopulation}
            />
          </div>
          <div className="form-group">
            <label>Year Came To Power: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.province}
              onChange={this.onChangeProvince}
            />
          </div>
          <div>
            <button
              type="submit"
              value="Edit Emperor"
              className="btn btn-warning"
            >
              Update City
            </button>
          </div>
        </form>
      </div>
    );
  }
}

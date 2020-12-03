import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const City = (props) => (
  <tr>
    <td>{props.city.name}</td>
    <td>{props.city.yearFounded}</td>
    <td>{props.city.population}</td>
    <td>{props.city.province}</td>
    <td>{props.city.honors}</td>
    <td>
      <Link to={"/update/" + props.city._id}>Edit</Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteCity(props.city._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class CityList extends Component {
  constructor(props) {
    super(props);

    this.deleteCity = this.deleteCity.bind(this);

    this.state = { cities: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/cities/")
      .then((res) => {
        this.setState({ cities: res.data });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  deleteCity(id) {
    axios.delete("http://localhost:5003/cities/" + id).then((res) => {
      console.log(res.data);
    });
    this.setState({
      cities: this.state.cities.filter((el) => el._id !== id),
    });
  }

  cityList() {
    return this.state.cities.map((currentcity) => {
      return (
        <City
          city={currentcity}
          deleteCity={this.deleteCity}
          key={currentcity._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Year Found</th>
              <th>Population</th>
              <th>Province</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.cityList()}</tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Politician = (props) => (
  <tr>
    <td>{props.politician.name}</td>
    <td>{props.politician.office}</td>
    <td>{props.politician.bio}</td>
    <td>{props.politician.accomplishments}</td>
    <td>
      <Link to={"/update/" + props.politician._id}>Edit</Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deletePolitician(props.politician._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class PoliticianList extends Component {
  constructor(props) {
    super(props);

    this.deletePolitician = this.deletePolitician.bind(this);

    this.state = { politicians: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/politicians/")
      .then((res) => {
        this.setState({ politicians: res.data });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  deletePolitician(id) {
    axios.delete("http://localhost:5003/politicians/" + id).then((res) => {
      console.log(res.data);
    });
    this.setState({
      politicians: this.state.politicians.filter((el) => el._id !== id),
    });
  }

  politicianList() {
    return this.state.politicians.map((currentpolitician) => {
      return (
        <Politician
          politician={currentpolitician}
          deletePolitician={this.deletePolitician}
          key={currentpolitician._id}
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
              <th>Offices</th>
              <th>Bio</th>
              <th>Accomplishments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.politicianList()}</tbody>
        </table>
      </div>
    );
  }
}

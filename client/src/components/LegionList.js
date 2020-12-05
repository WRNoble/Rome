import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Legion = (props) => (
  <tr>
    <td>{props.legion.title}</td>
    <td>{props.legion.founding}</td>
    <td>{props.legion.emblem}</td>
    <td>{props.legion.postings}</td>
    <td>{props.legion.honors}</td>
    <td>
      <Link to={"/updatelegion/" + props.legion._id}>Edit</Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteLegion(props.legion._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class LegionList extends Component {
  constructor(props) {
    super(props);

    this.deleteLegion = this.deleteLegion.bind(this);

    this.state = { legions: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/legions/")
      .then((res) => {
        this.setState({ legions: res.data });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  deleteLegion(id) {
    axios.delete("http://localhost:5003/legions/" + id).then((res) => {
      console.log(res.data);
    });
    this.setState({
      legions: this.state.legions.filter((el) => el._id !== id),
    });
  }

  legionList() {
    return this.state.legions.map((currentlegion) => {
      return (
        <Legion
          legion={currentlegion}
          deleteLegion={this.deleteLegion}
          key={currentlegion._id}
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
              <th>Title</th>
              <th>Founding</th>
              <th>Emblem</th>
              <th>Postings</th>
              <th>Honors</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.legionList()}</tbody>
        </table>
      </div>
    );
  }
}

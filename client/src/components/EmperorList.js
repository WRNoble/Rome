import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Emperor = (props) => (
  <tr>
    <td>{props.emperor.name}</td>
    <td>{props.emperor.yearBorn}</td>
    <td>{props.emperor.riseToPower}</td>
    <td>{props.emperor.riseToPowerYear}</td>
    <td>{props.emperor.death}</td>
    <td>{props.emperor.bio}</td>
    <td>{props.emperor.accomplishments}</td>
    <td>
      <Link to={"/update/" + props.emperor._id}>Edit</Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteEmperor(props.emperor._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class EmperorList extends Component {
  constructor(props) {
    super(props);

    this.deleteEmperor = this.deleteEmperor.bind(this);

    this.state = { emperors: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/emperors/")
      .then((res) => {
        this.setState({ emperors: res.data });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  deleteEmperor(id) {
    axios.delete("http://localhost:5003/emperors/" + id).then((res) => {
      console.log(res.data);
    });
    this.setState({
      emperors: this.state.emperors.filter((el) => el._id !== id),
    });
  }

  emperorList() {
    return this.state.emperors.map((currentemperor) => {
      return (
        <Emperor
          emperor={currentemperor}
          deleteEmperor={this.deleteEmperor}
          key={currentemperor._id}
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
              <th>Year Born</th>
              <th>Came To Power</th>
              <th>Year In Power</th>
              <th>Death</th>
              <th>Bio</th>
              <th>Accomplishments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.emperorList()}</tbody>
        </table>
      </div>
    );
  }
}

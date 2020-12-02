import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Emperor = (props) => {
  <tr>
    <td>{props.emperor.name}</td>
    <td>{props.emperor.yearBorn}</td>
    <td>{props.emperor.riseToPower}</td>
    <td>{props.emperor.death}</td>
    <td>{props.emperor.bio}</td>
    <td>{props.emperor.accomplishments}</td>
    <td>
      <Link to={"/updateemperor/" + props.emperor._id}>Edit</Link>
      <a
        href="#"
        onClick={() => {
          props.deleteEmperor(props.emperor._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>;
};

export default class EmperorList extends Component {
  constructor(props) {
    super(props);

    this.deleteEmperor = this.deleteEmperor.bind(this);

    this.state = { emperors: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/emperors/")
      .then((response) => {
        this.setState({ emperors: response.data });
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  deleteEmperor(id) {
    axios.delete("http://localhost:5003/emperors/" + id).then((response) => {
      console.log(response.data);
    });
    this.setState({
      emperors: this.state.emperors.map((el) => el._id !== id),
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
        <h3>Emperors</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Rise to Power</th>
              <th>Came to Power</th>
              <th>Death</th>
              <th>Bio</th>
              <th>Accomplishments</th>
            </tr>
          </thead>
          <tbody>{this.emperorList()}</tbody>
        </table>
      </div>
    );
  }
}

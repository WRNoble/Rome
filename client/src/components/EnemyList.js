import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Enemy = (props) => (
  <tr>
    <td>{props.enemy.name}</td>
    <td>{props.enemy.nation}</td>
    <td>{props.enemy.death}</td>
    <td>{props.enemy.bio}</td>
    <td>{props.enemy.accomplishments}</td>
    <td>
      <Link to={"/update/" + props.enemy._id}>Edit</Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteEnemy(props.enemy._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class EnemyList extends Component {
  constructor(props) {
    super(props);

    this.deleteEnemy = this.deleteEnemy.bind(this);

    this.state = { enemies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/enemies/")
      .then((res) => {
        this.setState({ enemies: res.data });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  deleteEnemy(id) {
    axios.delete("http://localhost:5003/enemies/" + id).then((res) => {
      console.log(res.data);
    });
    this.setState({
      enemies: this.state.enemies.filter((el) => el._id !== id),
    });
  }

  enemyList() {
    return this.state.enemies.map((currentenemy) => {
      return (
        <Enemy
          enemy={currentenemy}
          deleteEnemy={this.deleteEnemy}
          key={currentenemy._id}
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
              <th>Nation</th>
              <th>Death</th>
              <th>Bio</th>
              <th>Accomplishments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.enemyList()}</tbody>
        </table>
      </div>
    );
  }
}

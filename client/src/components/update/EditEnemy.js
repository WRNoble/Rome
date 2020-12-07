import React, { Component } from "react";
import axios from "axios";

export default class EditEnemy extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNation = this.onChangeNation.bind(this);
    this.onChangeDeath = this.onChangeDeath.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeAccomplishments = this.onChangeAccomplishments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      nation: "",
      death: "",
      bio: "",
      accomplishments: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/enemies/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          nation: res.data.nation,
          death: res.data.death,
          bio: res.data.bio,
          accomplishments: res.data.accomplishments,
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

  onChangeNation(e) {
    this.setState({
      nation: e.target.value,
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
    const enemy = {
      name: this.state.name,
      nation: this.state.nation,
      death: this.state.death,
      bio: this.state.bio,
      accomplishments: this.state.accomplishments,
    };
    console.log(enemy);

    axios
      .post(
        "http://localhost:5003/enemies/updateenemy/" +
          this.props.match.params.id,
        enemy
      )
      .then((res) => console.log(res.data));

    window.location = "/enemies";
  }

  render() {
    return (
      <div className="container">
        <h2>Edit Enemy</h2>
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
            <label>Nation: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.nation}
              onChange={this.onChangeNation}
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
          <div>
            <button
              type="submit"
              value="Edit Enemy"
              className="btn btn-warning"
            >
              Update Enemy
            </button>
          </div>
        </form>
      </div>
    );
  }
}

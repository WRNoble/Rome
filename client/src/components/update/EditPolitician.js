import React, { Component } from "react";
import axios from "axios";

export default class EditPolitician extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCareer = this.onChangeCareer.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeAccomplishments = this.onChangeAccomplishments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      career: "",
      bio: "",
      accomplishments: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/politicians/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          career: res.data.career,
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

  onChangeCareer(e) {
    this.setState({
      career: e.target.value,
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
    const politician = {
      name: this.state.name,
      career: this.state.career,
      bio: this.state.bio,
      accomplishments: this.state.accomplishments,
    };
    console.log(politician);

    axios
      .post(
        "http://localhost:5003/politicians/updatepolitician/" +
          this.props.match.params.id,
        politician
      )
      .then((res) => console.log(res.data));

    window.location = "/politicians";
  }

  render() {
    return (
      <div className="container">
        <h2>Edit Politician</h2>
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
            <label>Offices held: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.career}
              onChange={this.onChangeCareer}
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
              value="Edit Politician"
              className="btn btn-warning"
            >
              Update Politician
            </button>
          </div>
        </form>
      </div>
    );
  }
}

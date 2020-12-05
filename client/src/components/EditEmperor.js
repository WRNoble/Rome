import React, { Component } from "react";
import axios from "axios";

export default class EditEmperor extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeYearBorn = this.onChangeYearBorn.bind(this);
    this.onChangeRiseToPower = this.onChangeRiseToPower.bind(this);
    this.onChangeRiseToPowerYear = this.onChangeRiseToPowerYear.bind(this);
    this.onChangeDeath = this.onChangeDeath.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeAccomplishments = this.onChangeAccomplishments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      yearBorn: "",
      riseToPower: "",
      riseToPowerYear: "",
      death: "",
      bio: "",
      accomplishments: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/emperors/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          yearBorn: res.data.yearBorn,
          riseToPower: res.data.riseToPower,
          riseToPowerYear: res.data.riseToPowerYear,
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

  onChangeYearBorn(e) {
    this.setState({
      yearBorn: e.target.value,
    });
  }
  onChangeRiseToPower(e) {
    this.setState({
      riseToPower: e.target.value,
    });
  }
  onChangeRiseToPowerYear(e) {
    this.setState({
      riseToPowerYear: e.target.value,
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
    const emperor = {
      name: this.state.name,
      yearBorn: this.state.yearBorn,
      riseToPower: this.state.riseToPower,
      riseToPowerYear: this.state.riseToPowerYear,
      death: this.state.death,
      bio: this.state.bio,
      accomplishments: this.state.accomplishments,
    };
    console.log(emperor);

    axios
      .post(
        "http://localhost:5003/emperors/updateemperor/" +
          this.props.match.params.id,
        emperor
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h2>Edit Emperor</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name || " "}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Birth Year: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.yearBorn || " "}
              onChange={this.onChangeYearBorn}
            />
          </div>
          <div className="form-group">
            <label>Rise To Power: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.riseToPower || " "}
              onChange={this.onChangeRiseToPowerYear}
            />
          </div>
          <div className="form-group">
            <label>Year Came To Power: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.riseToPowerYear || " "}
              onChange={this.onChangeRiseToPowerYear}
            />
          </div>
          <div className="form-group">
            <label>Death: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.death || " "}
              onChange={this.onChangeDeath}
            />
          </div>
          <div className="form-group">
            <label>Bio: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.bio || " "}
              onChange={this.onChangeBio}
            />
          </div>
          <div className="form-group">
            <label>Accomplishments: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.accomplishments || " "}
              onChange={this.onChangeAccomplishments}
            />
          </div>
          <div>
            <button
              type="submit"
              value="Edit Emperor"
              className="btn btn-warning"
            >
              Update Emperor
            </button>
          </div>
        </form>
      </div>
    );
  }
}

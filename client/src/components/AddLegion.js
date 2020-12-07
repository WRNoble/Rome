import React, { Component } from "react";
import axios from "axios";

export default class AddLegion extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeFounding = this.onChangeFounding.bind(this);
    this.onChangeEmblem = this.onChangeEmblem.bind(this);
    this.onChangePostings = this.onChangePostings.bind(this);
    this.onChangeHonors = this.onChangeHonors.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      founding: "",
      emblem: "",
      postings: "",
      honors: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5003/legions/").catch((err) => {
      console.log("Error: " + err);
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeFounding(e) {
    this.setState({
      founding: e.target.value,
    });
  }

  onChangeEmblem(e) {
    this.setState({
      emblem: e.target.value,
    });
  }

  onChangePostings(e) {
    this.setState({
      postings: e.target.value,
    });
  }

  onChangeHonors(e) {
    this.setState({
      honors: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const legion = {
      title: this.state.title,
      founding: this.state.founding,
      emblem: this.state.emblem,
      postings: this.state.postings,
      honors: this.state.honors,
    };

    axios.post("http://localhost:5003/legions/addlegion", legion);

    window.location = "/legions";
  }

  render() {
    return (
      <div className="container">
        <h2> Add Legion </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Founding: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.founding}
              onChange={this.onChangeFounding}
            />
          </div>
          <div className="form-group">
            <label>Emblem: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.emblem}
              onChange={this.onChangeEmblem}
            />
          </div>
          <div className="form-group">
            <label>Postings: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.postings}
              onChange={this.onChangePostings}
            />
          </div>
          <div className="form-group">
            <label>Honors: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.honors}
              onChange={this.onChangeHonors}
            />
          </div>
          <button type="submit" value="Add Legion" className="btn btn-warning">
            Add Legion
          </button>
        </form>
      </div>
    );
  }
}

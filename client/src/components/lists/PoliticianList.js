import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Politician = (props) => (
  <tr>
    <td>{props.politician.name}</td>
    <td>{props.politician.career}</td>
    <td>{props.politician.bio}</td>
    <td>{props.politician.accomplishments}</td>
    <td>
      <Link to={"/updatepolitician/" + props.politician._id}>Edit</Link>{" "}
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deletePolitician(props.politician._id);
        }}
      >
        Delete
      </button>{" "}
      {/* <button
        className="btn btn-warning"
        onClick={() => {
          props.handleOpenModal(props.politician._id);
        }}
      >
        See More
      </button> */}
    </td>
  </tr>
);

export default class PoliticianList extends Component {
  constructor(props) {
    super(props);

    this.deletePolitician = this.deletePolitician.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      politicians: [],
      showModal: false,
    };
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

  handleOpenModal(id) {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal(id) {
    this.setState({
      showModal: false,
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
        <div>
          <Link to={"/addpolitician/"}>Add Politician</Link>
        </div>
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

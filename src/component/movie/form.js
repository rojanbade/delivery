import React, { Component } from "react";

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      option: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let stateName = e.target.name;
    this.setState({
      [stateName]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      this.state.username +
        " is added successfully!!" +
        this.state.option +
        " is changed successfully!!"
    );
  };

  render() {
    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <select
            name="option"
            value={this.state.option}
            onChange={this.handleChange}
          >
            <option value="action">Action</option>
            <option value="romantic">Romantic</option>
            <option value="horror">Horror</option>
            <option value="documentary">Documentary</option>
          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddMovie;

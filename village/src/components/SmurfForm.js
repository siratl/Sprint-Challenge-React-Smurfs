import React, { Component } from 'react';
import axios from 'axios';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: '',
      newSmurf: {
        name: '',
        age: '',
        height: '',
      },
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios
      // add code to create the smurf using the api
      .post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          newSmurf: {
            name: '',
            age: '',
            height: '',
          },
        });
      })
      .catch(err => {
        this.setState({ error: err.statusText })
      })
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

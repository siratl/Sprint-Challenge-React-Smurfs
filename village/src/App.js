import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import { Button } from 'reactstrap'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data,
        });
      })
      .catch(err => {
        this.setState({ ...this.state, error: err.statusText });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.error ? (
          <h3>{this.state.error}</h3>
        ) : (
          <div>
            <Route
              exact
              path="/smurf-form"
              render={props => (
                <SmurfForm {...props} addSmurf={this.addSmurf} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
            />
            {this.props.location.pathname === '/' ? (
              <Link to="/smurf-form">
                <Button color='primary'>Add Smurf</Button>
              </Link>
            ) : (
              <Link to="/">
                <Button color='primary'>Smurf Village</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;

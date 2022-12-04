import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Title extends Component {
  state = {
    text: ""
  }

  componentDidMount() {
    const {REACT_APP_BACKEND_URL} = process.env
    console.log('Backend url=', REACT_APP_BACKEND_URL)
    const apiUrl = `${REACT_APP_BACKEND_URL}/demo`;
    // const apiUrl = '/demo';
    fetch(apiUrl)
    .then(response => response.json())
    .then((data) => this.setState({text: data.title}));
  }

  render() {
    return (
        <div>
          <p>
            k8s-poc-frontend: {this.state.text}
          </p>
        </div>
    );
  }
}

export default Title;

import React, { Component } from 'react';
import features from './features';

export default class App extends Component {
  render() {
    return (
      <div id="main">
        <features.crimes.components.crimesList />
      </div>
    );
  }
}

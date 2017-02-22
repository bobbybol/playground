/* jshint -W119, -W104 */

import React, { Component } from 'react';
//import { Router, browserHistory } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

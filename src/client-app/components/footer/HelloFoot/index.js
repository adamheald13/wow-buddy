import React, { Component } from 'react';
import './style.css';

class HelloFoot extends Component {
  render() {
    const helloFootElement = React.createElement('div', {
      className: 'hello-foot'
    }, `Hello Foot`);

    return helloFootElement;
  }
}

export default HelloFoot;

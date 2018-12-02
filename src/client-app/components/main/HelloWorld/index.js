import React, { Component } from 'react';
import './style.css';

class HelloWorld extends Component {
  render() {
    const helloWorldElement = React.createElement('div', {
      className: 'hello-world'
    }, `Hello World`);

    return helloWorldElement;
  }
}

export default HelloWorld;

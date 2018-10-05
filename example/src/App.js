import React, { Component } from "react";

import ExampleComponent from "react-layout-ui";

export default class App extends Component {
  render() {
    return (
      <ExampleComponent color="gray" width={50}>
        <div>hello component</div>
      </ExampleComponent>
    );
  }
}

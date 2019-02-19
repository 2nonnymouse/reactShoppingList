import React from "react";

class App extends React.Component {
  state = {
    count: 2
  };
  render() {
    return (
      // replaces the div
      <React.Fragment>
        <h1>hello world</h1>;<span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default App;

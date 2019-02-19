import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      // replaces the div
      <React.Fragment>
        <h1>hello world</h1>;<span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default App;

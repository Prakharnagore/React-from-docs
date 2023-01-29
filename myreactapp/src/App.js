import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log("this",this)
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default App;

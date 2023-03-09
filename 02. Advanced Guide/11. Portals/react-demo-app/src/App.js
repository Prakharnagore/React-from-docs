import React from "react";
import Modal from "./Modal";
import Child from "./Child";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Modal>
          <Child handleClick={this.handleClick} />
        </Modal>
      </div>
    );
  }
}

export default App;

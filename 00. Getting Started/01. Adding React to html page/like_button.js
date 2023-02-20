"use strict";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  } 

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    // with react.createElement;
    return React.createElement(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );

    // using JSX
    // return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));

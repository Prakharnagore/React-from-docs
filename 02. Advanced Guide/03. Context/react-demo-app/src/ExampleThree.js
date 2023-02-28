import React from "react";

const ThemeContext = React.createContext("light");

class Toolbar extends React.Component {
  render() {
    console.log("Props",this.props.value);
    return <h1>{this.props.value}</h1>;
  }
}

const ExampleThree = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => <Toolbar value={value} />}
    </ThemeContext.Consumer>
  );
};

export default ExampleThree;

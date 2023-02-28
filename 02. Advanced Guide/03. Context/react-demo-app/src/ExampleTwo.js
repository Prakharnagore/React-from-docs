import React from "react";

const ThemeContext = React.createContext("light");

class Toolbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log("contextType",this.context);
    return <h1>{this.context}</h1>;
  }
}

const ExampleTwo = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default ExampleTwo;

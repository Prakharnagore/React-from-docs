import React from "react";
const ThemeContext = React.createContext({ name: "Hello World" });

export default class App extends React.Component {
  render() {
    console.log("this.context", this.context);
    return (
      <div>Hello</div>
    );
  }
}

App.contextType = ThemeContext;

// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   render() {
//     console.log("this.context", this.context);
//     return <button>{"this.context"}</button>;
//   }
// }
// ThemedButton.contextType = ThemeContext;

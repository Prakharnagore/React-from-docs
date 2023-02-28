import React from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

class ThemedButton extends React.Component {
  render() {
    return <ThemeContext.Consumer>
    {({theme, toggleTheme}) => (
      <button
        onClick={toggleTheme}
        style={{backgroundColor: theme.background}}>
        Toggle Theme
      </button>
    )}
  </ThemeContext.Consumer>
  }
}

function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
        {/* <ThemedButton /> */}
      </>
    );
  }
}

export default App;

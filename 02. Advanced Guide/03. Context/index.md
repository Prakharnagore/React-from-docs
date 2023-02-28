### 01. Contect

---

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### 02. When to use context

---

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

---

```

const ThemeContext = React.createContext("light");

const ExampleOne = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

class Toolbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log("contextType",this.context);
    return <h1>hello</h1>;
  }
}

```

### 03. Before You Use Context

---

---

### 04. API - React.createContext

```
  const MyContext = React.createContext(defaultValue);
```

### 05. API - Context.Provider

```
  <MyContext.Provider value={/* some value */}>
```

### 06. Class.contextType

```
  MyClass.contextType = MyContext;
  & Use {this.context} inside MyClass
```

### 07. Context.Consumer

```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

### 08. Context.displayName

```
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
```

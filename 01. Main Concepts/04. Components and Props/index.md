### 01. Components and Props...
***
Components are like JavaScript functions. They accept inputs (called “props”) and return React elements describing what should appear on the screen.
***

### 02. Function and Class Components
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 02. Rendering a Component
***
React passes JSX attributes and children to the user-defined component as a single object called “props”
***
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

### 03. Composing Components
***
Components can refer to other components in their output.
***
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

### 04. Extracting Components
***
Don’t be afraid to split components into smaller components.
***

### 05. Props are Read-Only
***
All React components must act like pure functions with respect to their props.
***

### 01. State and Props

---

State is similar to props, but it is private and fully controlled by the component.

---

### 02. Adding Local State to a Class

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

### 03. Adding Lifecycle Methods to a Class

---

These methods are called “lifecycle methods”.

---

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

### 04. Using State Correctly

```
 Wrong
this.state.comment = 'Hello';

Instead, use setState():
 Correct
this.setState({comment: 'Hello'});
```

### 05. State Updates May Be Asynchronous\*

---

React may batch multiple setState() calls into a single update for performance.
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

---

```
Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### 06. State Updates are Merged

---

When you call setState(), React merges the object you provide into the current state.

---

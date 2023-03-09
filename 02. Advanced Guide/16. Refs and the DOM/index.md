### 01. Refs and the DOM

---

Refs provide a way to access DOM nodes or React elements created in the render method.

---

### 02. When to Use Refs

---

There are a few good use cases for refs:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

---

### 03. Creating Refs

---

Refs are created using React.createRef() and attached to React elements via the ref attribute.

---

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

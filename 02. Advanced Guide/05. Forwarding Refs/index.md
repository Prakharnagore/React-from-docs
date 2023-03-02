### 01. Forwarding Refs

---

Ref forwarding is a technique for automatically passing a ref through a component to one of its children.

---

### 02. Forwarding refs to DOM components

---

Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

---

```
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

### 03. Forwarding refs in higher-order components

```
// somefile.js

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}

export default logProps(FancyButton);

// somefile.js
import FancyButton from './FancyButton';

const ref = React.createRef();

<FancyButton
  label="Click Me"
  handleClick={handleClick}
  ref={ref}
/>

```

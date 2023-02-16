// Refs provide a way to access DOM nodes or React elements created in the render method.

// When to Use Refs
// There are a few good use cases for refs:
// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.
// Avoid using refs for anything that can be done declaratively.
// For example, instead of exposing open() and close() methods on a Dialog component,
// pass an isOpen prop to it.

// Creating Refs
// Refs are created using React.createRef() and attached to React elements via 
// the ref attribute. Refs are commonly assigned to an instance property when a 
// component is constructed so they can be referenced throughout the component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}

// Accessing Refs
const node = this.myRef.current;
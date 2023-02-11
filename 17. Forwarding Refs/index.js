// Ref forwarding is an opt-in feature that lets some components take a ref they receive
// and pass it further down (in other words, “forward” it) to a child

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

// Note
// The second ref argument only exists when you define a component with React.forwardRef call
// Regular function or class components don’t receive the ref argument,
// and ref is not available in props either

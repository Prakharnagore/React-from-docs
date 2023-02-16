// The term “render prop” refers to a technique for sharing code
// between React components using a prop whose value is a function.
<DataProvider render={(data) => <h1>Hello {data.target}</h1>} />;
// Usage example
class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }
  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}
// One interesting thing to note about render props is that you
// can implement most higher-order components (HOC) using a regular component
// with a render prop. For example, if you would prefer to have a withMouse
// HOC instead of a <Mouse> component
// you could easily create one using a regular <Mouse> with a render prop
// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse
          render={(mouse) => <Component {...this.props} mouse={mouse} />}
        />
      );
    }
  };
}

// Using Props Other Than render
// It’s important to remember that just because the pattern is
// called “render props” you don’t have to use a prop named render
// to use this pattern. In fact, any prop that is a function that a
// component uses to know what to render is technically a “render prop”.
{
  <Mouse
    children={(mouse) => (
      <p>
        The mouse position is {mouse.x}, {mouse.y}
      </p>
    )}
  />;
}
{
  <Mouse>
    {(mouse) => (
      <p>
        The mouse position is {mouse.x}, {mouse.y}
      </p>
    )}
  </Mouse>;
}
// Since this technique is a little unusual
// you’ll probably want to explicitly state that children should be a function
// in your propTypes when designing an API like this
Mouse.propTypes = {
  children: PropTypes.func.isRequired
};
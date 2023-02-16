// JSX is not a requirement for using React
// Using React without JSX is especially convenient when you don’t
// want to set up compilation in your build environment.

// Each JSX element is just syntactic sugar for calling
// React.createElement(component, props, ...children).
// So, anything you can do with JSX can also be done with just plain JavaScript.
// For example, this code written with JSX:
{
  class Hello extends React.Component {
    render() {
      return <div>Hello {this.props.toWhat}</div>;
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Hello toWhat="World" />);
}
// can be compiled to this code that does not use JSX:
{
  class Hello extends React.Component {
    render() {
      return React.createElement("div", null, `Hello ${this.props.toWhat}`);
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(Hello, { toWhat: "World" }, null));
}

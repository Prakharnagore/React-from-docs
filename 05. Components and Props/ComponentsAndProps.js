// 01
// Function and Class Components
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 02
// When React sees an element representing a user-defined component,
// it passes JSX attributes and children to this component as a single object.
// We call this object “props”
// For example, this code renders “Hello, Sara” on the page

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);

// Let’s recap what happens in above example
// We call root.render() with the <Welcome name="Sara" /> element.
// React calls the Welcome component with {name: 'Sara'} as the props.
// Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.


// 03
// Composing Components
// Components can refer to other components in their output. 
// This lets us use the same component abstraction for any level of detail.
// A button, a form, a dialog, a screen: in React apps,
// all those are commonly expressed as components
// For example, we can create an App component that renders Welcome many times

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


// 04
// ** Props are Read-Only
// Whether you declare a component as a function or a class,
// it must never modify its own props. Consider this sum function
function sum(a, b) {
  return a + b;
}
// Such functions are called “pure” because they do not attempt to change their inputs,
// and always return the same result for the same inputs.
// In contrast, this function is impure because it changes its own input
function withdraw(account, amount) {
  account.total -= amount;
}
// React is pretty flexible but it has a single strict rule:
// ** All React components must act like pure functions with respect to their props.
// Handling events with React elements is very similar to handling events on DOM elements.
// There are some syntax differences
// React events are named using camelCase, rather than lowercase
// With JSX you pass a function as the event handler, rather than a string
// For example, the HTML:
<>
  <button onclick="activateLasers()">Activate Lasers</button>
  // is slightly different in React:
  <button onClick={activateLasers}>Activate Lasers</button>
</>;
// Another difference is that you cannot return false to prevent default behavior in React.
// You must call preventDefault explicitly
// In HTML
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>;
// In React
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
// When you define a component using an ES6 class
// a common pattern is for an event handler to be a method on the class
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// If calling bind annoys you, there are two ways you can get around this
handleClick = () => {
  console.log("this is:", this);
};
// or
<button onClick={() => this.handleClick()}>Click me</button>;
// Passing Arguments to Event Handlers
<>
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
</>
// In both cases, the e argument representing the React event will be passed 
// as a second argument after the ID. With an arrow function, we have to pass it explicitly,
// but with bind any further arguments are automatically forwarded
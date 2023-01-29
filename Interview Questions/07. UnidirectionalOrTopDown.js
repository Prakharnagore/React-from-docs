// A component may choose to pass its state down as props to its child components
<FormattedDate date={this.state.date} />;
// The FormattedDate component would receive the date in its
// props and wouldn’t know whether it came from the Clock’s state,
// from the Clock’s props, or was typed by hand
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
// This is commonly called a “top-down” or “unidirectional” data flow
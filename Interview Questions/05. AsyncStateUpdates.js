// State Updates May Be Asynchronous
// React may batch multiple setState() calls into a single update for performance.
// Because this.props and this.state may be updated asynchronously,
// you should not rely on their values for calculating the next state.

// For example, this code may fail to update the counter
// *Wrong*
this.setState({
  counter: this.state.counter + this.props.increment,
});

// To fix it, use a second form of setState() that accepts a function 
// rather than an object. That function will receive the previous state 
// as the first argument, and the props at the time the update is applied as the second argument
// *Correct*
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
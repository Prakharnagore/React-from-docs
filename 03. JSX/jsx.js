//01
// JSX element
var element = <h1>Hello, world!</h1>;

//02
// JSX Prevents Injection Attacks
// It is safe to embed user input in JSX
// By default, React DOM escapes any values embedded in JSX before rendering them.
// Thus it ensures that you can never inject anything that’s not explicitly written 
// in your application. Everything is converted to a string before being rendered. 
// This helps prevent XSS (cross-site-scripting) attacks.
const title = response.potentiallyMaliciousInput;
// This is safe:
var element = <h1>{title}</h1>;



//03
// JSX Represents Objects
// Babel compiles JSX down to React.createElement() calls.
// These two examples are identical:
var element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
var element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// React.createElement() performs a few checks to help you write bug-free code 
// but essentially it creates an object like this
// Note: this structure is simplified
var element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
// These objects are called “React elements”. You can think of them as 
// descriptions of what you want to see on the screen. React reads these 
// objects and uses them to construct the DOM and keep it up to date.
### 01. 


// Fundamentally, JSX just provides syntactic sugar for the
// React.createElement(component, props, ...children) function.
// The JSX codes
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>;
// The transpiler(complier) would convert this into the following JavaScript code
React.createElement(MyButton, { color: "blue", shadowSize: 2 }, "Click Me");
// This way, the browser can understand and execute the JavaScript code.
// There are several tools available for transpiling JSX, including Babel and ReactJS itself.

// React Must Be in Scope
// -
// Using Dot Notation for JSX Type
// You can also refer to a React component using dot-notation from within JSX.
// This is convenient if you have a single module that exports many React components.
import React from "react";
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};
function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// User-Defined Components Must Be Capitalized
// If you name uses defined component with lower case React thinks that as an HTML tag
// because it's not capitalized

// Choosing the Type at Runtime
// -

// Props in JSX

// 01. JavaScript Expressions as Props
// <MyComponent foo={1 + 2 + 3 + 4} />

// 02. String Literals
// You can pass a string literal as a prop. These two JSX expressions are equivalent:
// <MyComponentOne message="hello world" />
// <MyComponentTwo message={"hello world"} />
// When you pass a string literal, its value is HTML-unescaped. So these two
// JSX expressions are equivalent:
// <MyComponent message="&lt;3" />
// <MyComponent message={"<3"} />

// 03. Props Default to “True”
// <MyTextBox autocomplete />
// <MyTextBox autocomplete={true} />

// 04. Spread Attributes
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}
function App2() {
  const props = { firstName: "Ben", lastName: "Hector" };
  return <Greeting {...props} />;
}


// Children in JSX

// 01. String Literals
// <MyComponent>Hello world!</MyComponent>
// 02. JSX Children
// -
// 03. JavaScript Expressions as Children
// <MyComponent>foo</MyComponent>
// <MyComponent>{'foo'}</MyComponent>
// 04. Functions as Children
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
// 05. Booleans, Null, and Undefined Are Ignored
// false, null, undefined, and true are valid children
// They simply don’t render
// These JSX expressions will all render to the same thing
// <div />
// <div></div>
// <div>{false}</div>
// <div>{null}</div>
// <div>{undefined}</div>
// <div>{true}</div>
// Conversely, if you want a value like false, true, null, or undefined
// to appear in the output, you have to convert it to a string first
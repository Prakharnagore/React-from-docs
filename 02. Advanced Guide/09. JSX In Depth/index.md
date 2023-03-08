### 01. JSX In Depth

---

JSX is converted into JavaScript with the help of compiler(transpiler) (ex: babel)

---

```
JSX code:
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>

Compiles into:
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)

```

### 02. Specifying The React Element Type

---

The first part of a JSX tag determines the type of the React element.
Capitalized types indicate that the JSX tag is referring to a React component.

---

### Using Dot Notation for JSX Type

---

---

```
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

```

### User-Defined Components Must Be Capitalized

---

---

### 03. Props in JSX

---

---

### JavaScript Expressions as Props

---

---

```
You can pass any JavaScript expression as a prop,
by surrounding it with {}.
<MyComponent foo={1 + 2 + 3 + 4} />

```

### String Literals

---

---

```
You can pass a string literal as a prop. These two JSX expressions are equivalent:

<MyComponent message="hello world" />

<MyComponent message={'hello world'} />


When you pass a string literal, its value is HTML-unescaped. So these two JSX expressions are equivalent:

<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />
```

### Props Default to “True”

---

---

### Spread Attributes

---

---

### 04. Children in JSX

---

---

### String Literals

---

---

### JSX Children

---

---

### JavaScript Expressions as Children

---

---

### Functions as Children

```
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
```

### 05. Booleans, Null, and Undefined Are Ignored

---

false, null, undefined, and true are valid children. They simply don’t render. These JSX expressions will all render to the same thing.

---

### 06. Caveat

---

One caveat is that some “falsy” values, such as the 0 number, are still rendered by React. For example, this code will not behave as you might expect because 0 will be printed when props.messages is an empty array.

---

```
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
To fix this, make sure that the expression before && is always boolean:

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```
### 01. JSX element

It is called JSX, and it is a syntax extension to JavaScript.

```
const name="Prakhar"
var element = <h1>Hello, {name}!</h1>;
```

### 02. JSX Prevents Injection Attacks

The statement is generally correct. When rendering user input in JSX, React DOM automatically escapes any values that could be used to perform a cross-site scripting (XSS) attack. To prevent this, React DOM automatically escapes any values that are included in JSX before rendering them. This means that any characters that could be used to inject code, such as angle brackets or quotes, are converted to their HTML entity equivalents. For example, the string <script>alert('Hello world!');</script> would be rendered as &lt;script&gt;alert(&#39;Hello world!&#39;);&lt;/script&gt;. By converting these characters to their HTML entity equivalents, React DOM ensures that any user input that is rendered in JSX is treated as plain text.

```
This is safe:
const title = response.potentiallyMaliciousInput;
var element = <h1>{title}</h1>;
```

### 03. JSX Represents Objects

Babel compiles JSX down to React.createElement() calls. These two examples are identical:

```
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

Note: this structure is simplified
These objects are called “React elements”. 

var element = {
  type: 'h1',
  props: {
  className: 'greeting',
  children: 'Hello, world!'
  }
};
```
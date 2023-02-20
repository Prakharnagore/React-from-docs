### 01. Rendering an element into the DOM

Unlike browser DOM elements, React elements are plain objects React DOM takes care of updating the DOM to match the React elements.

```
<div id="root"></div>

const rootElement = document.getElementById('root')
var root = ReactDOM.createRoot(rootElement);
var element = <h1>Hello, world</h1>;
root.render(element);
```

### 02. Updating the Rendered Element

React elements are immutable.Once you create an element, you can’t change its children or attributes. The only way to update the UI is to create a new element, and pass it to root.render()

```
var root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  setInterval(tick, 1000);
```

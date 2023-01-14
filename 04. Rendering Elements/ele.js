// 01
// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. 
// React DOM takes care of updating the DOM to match the React elements.

// 02
// To render a React element, first pass the DOM element to ReactDOM.createRoot(),
// then pass the React element to root.render()
<div id="root"></div> // root element

var root = ReactDOM.createRoot(
    document.getElementById('root')
  );

var element = <h1>Hello, world</h1>;
   root.render(element);

// 03
// React elements are immutable.
// React elements are immutable. Once you create an element,
// you can’t change its children or attributes. 
// An element is like a single frame in a movie
// it represents the UI at a certain point in time.
// The only way to update the UI is to create a new element, 
// and pass it to root.render()

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
//   It calls root.render() every second from a setInterval() callback.


// React Only Updates What’s Necessary
// React DOM compares the element and its children to the previous one,
// and only applies the DOM updates necessary to bring the DOM to the desired state.
// https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif
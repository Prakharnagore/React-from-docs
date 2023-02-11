// When to Use Context
// Context is designed to share data that can be considered “global” for a
// tree of React components, such as the current authenticated user, theme, or preferred language.
// Using context, we can avoid passing props through intermediate elements

// API
// const MyContext = React.createContext(defaultValue)
// <MyContext.Provider value={/* some value */}>
// .contextType & useContext & consumer- go get values
// Class.contextType
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext;
// The contextType property on a class can be assigned a Context object
// created by React.createContext(). Using this property lets you consume the nearest
// current value of that Context type using this.context
// Context.Consumer
<MyContext.Consumer>
  {(value) => /* render something based on the context value */ <></>}
</MyContext.Consumer>;
// Context.displayName
// Context object accepts a displayName string property
// React DevTools uses this string to determine what to display for the context
// For example, the following component will appear as MyDisplayName in the DevTools:
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
// <MyContext.Provider> // "MyDisplayName.Provider" in DevTools
// <MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
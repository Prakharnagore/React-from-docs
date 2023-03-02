### 01. Error Boundaries

---

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

Error boundaries do not catch errors for:

1. Event handlers
2. Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
3. Server side rendering
4. Errors thrown in the error boundary itself

---

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### 02. How About try/catch?
---
try / catch is great but it only works for imperative code,
However, React components are declarative and specify what should be rendered.
Error boundaries preserve the declarative nature of React, and behave as you would expect.
---

### 03. How About Event Handlers?
---
Error boundaries do not catch errors inside event handlers.
If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement.
---

### 01. Higher Oder Components

---

A higher-order component (HOC) is an advanced technique in React for reusing component logic.
A higher-order component is a function that takes a component and returns a new component.
HOCs are common in third-party React libraries, such as Redux’s connect
---
```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### 02. Use HOCs For Cross-Cutting Concerns
---
---
```

// @CommentList Component //

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}


// @BlogPost Component //

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

// HOC

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
s
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

```

### 03. Don’t Mutate the Original Component. Use Composition.
---

---

### 04. Convention: Pass Unrelated Props Through to the Wrapped Component
---
---

### 05. Convention: Maximizing Composability
---

---

### 06. Convention: Wrap the Display Name for Easy Debugging
---
---

### 07. Caveats

---
- Don’t Use HOCs Inside the render Method
- Static Methods Must Be Copied Over
- Refs Aren’t Passed Through
---



// Higher-Order Components
// A higher-order component (HOC) is an advanced technique in React for reusing component logic.
// They are a pattern that emerges from React’s compositional nature.
// A higher-order component is a function that takes a component and returns a new component.
const EnhancedComponent = higherOrderComponent(WrappedComponent);
// HOCs are common in third-party React libraries, such as
// Redux’s connect and Relay’s createFragmentContainer

// Use HOCs For Cross-Cutting Concerns
// A HOC is a pure function with zero side-effects
// 01 CommmentList Component
class CommentList extends React.Component {
constructor(props) {
super(props);
this.handleChange = this.handleChange.bind(this);
this.state = {
// "DataSource" is some global data source
comments: DataSource.getComments(),
};
}
componentDidMount() {
// Subscribe to changes
DataSource.addChangeListener(this.handleChange);
}
componentWillUnmount() {
// Clean up listener
DataSource.removeChangeListener(this.handleChange);
}

handleChange() {
// Update component state whenever the data source changes
this.setState({
comments: DataSource.getComments(),
});
}
render() {
return (

<div>
{this.state.comments.map((comment) => (
<Comment comment={comment} key={comment.id} />
))}
</div>
);
}
}
// 02 BlogPost Component
class BlogPost extends React.Component {
constructor(props) {
super(props);
this.handleChange = this.handleChange.bind(this);
this.state = {
blogPost: DataSource.getBlogPost(props.id),
};
}

componentDidMount() {
DataSource.addChangeListener(this.handleChange);
}

componentWillUnmount() {
DataSource.removeChangeListener(this.handleChange);
}

handleChange() {
this.setState({
blogPost: DataSource.getBlogPost(this.props.id),
});
}
render() {
return <TextBlock text={this.state.blogPost} />;
}
}
// Both comment list and blog post components are same
// CommentList and BlogPost aren’t identical — they call different methods on
// DataSource, and they render different output. But much of their implementation is the same
// Createing a HOC for both
const CommentListWithSubscription = withSubscription(
CommentList,
(DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
BlogPost,
(DataSource, props) => DataSource.getBlogPost(props.id)
);
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
// ...and returns another component...
return class extends React.Component {
constructor(props) {
super(props);
this.handleChange = this.handleChange.bind(this);
this.state = {
data: selectData(DataSource, props),
};
}

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }

};
}

// Don’t Mutate the Original Component. Use Composition.
// HOCs should use composition, by wrapping the input component in a container component

// Convention: Pass Unrelated Props Through to the Wrapped Component
return class extends React.Component {
render() {
// Filter out extra props that are specific to this HOC and shouldn't be
// passed through
const { extraProp, ...passThroughProps } = this.props;
// Inject props into the wrapped component. These are usually state values or
// instance methods.
const injectedProp = someStateOrInstanceMethod;
// Pass props to wrapped component
return (
<WrappedComponent injectedProp={injectedProp} {...passThroughProps} />
);
}
};

// Convention: Maximizing Composability
// The most common signature for HOCs looks like this
// React Redux's `connect`
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
// What?! If you break it apart, it’s easier to see what’s going on.
// // connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
// const ConnectedComment = enhance(CommentList);

// Convention: Wrap the Display Name for Easy Debugging
function withSubscription(WrappedComponent) {
class WithSubscription extends React.Component {
/_ ... _/
}
WithSubscription.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;
return WithSubscription;
}
function getDisplayName(WrappedComponent) {
return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

// Caveats
// 01. Don’t Use HOCs Inside the render Method
return class extends React.Component {
render() {
// A new version of EnhancedComponent is created on every render
// EnhancedComponent1 !== EnhancedComponent2
const EnhancedComponent = enhance(MyComponent);
// That causes the entire subtree to unmount/remount each time!
return <EnhancedComponent />;
}
};
// In those rare cases where you need to apply a HOC dynamically
// you can also do it inside a component’s lifecycle methods or its constructor
// 02. Static Methods Must Be Copied Over
// When you apply a HOC to a component, though, the original component is wrapped
// with a container component. That means the new component does not have any of
// the static methods of the original component
// Define a static method
WrappedComponent.staticMethod = function() {/_..._/}
// Now apply a HOC
const EnhancedComp = enhance(WrappedComponent);
// The enhanced component has no static method
typeof EnhancedComp.staticMethod === 'undefined' // true
// To solve this, you could copy the methods onto the container before returning it
function enhance(WrappedComponent) {
class Enhance extends React.Component {/_..._/}
// Must know exactly which method(s) to copy :(
Enhance.staticMethod = WrappedComponent.staticMethod;
return Enhance;
}
// However, this requires you to know exactly which methods need to be copied
// You can use hoist-non-react-statics to automatically copy all non-React static methods
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
class Enhance extends React.Component {/_..._/}
hoistNonReactStatic(Enhance, WrappedComponent);
return Enhance;
}
// Refs Aren’t Passed Through
// While the convention for higher-order components is to
// pass through all props to the wrapped component, this does not work for refs.
// That’s because ref is not really a prop — like key, it’s handled specially by React.
// If you add a ref to an element whose component is the result of a HOC,
// the ref refers to an instance of the outermost container component, not the wrapped component.
// The solution for this problem is to use the React.forwardRef
function logProps(Component) {
class LogProps extends React.Component {
componentDidUpdate(prevProps) {
console.log('old props:', prevProps);
console.log('new props:', this.props);
}
render() {
const {forwardedRef, ...rest} = this.props;

        // Assign the custom prop "forwardedRef" as a ref
        return <Component ref={forwardedRef} {...rest} />;
      }
    }
    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    return React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />;
    });

}

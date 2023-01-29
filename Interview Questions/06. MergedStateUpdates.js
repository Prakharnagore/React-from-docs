// When you call setState(), React merges the object you provide into the current state.
// For example, your state may contain several independent variables

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }
  componentDidMount() {
    fetchPosts().then((response) => {
      this.setState({
        posts: response.posts,
      });
    });

    fetchComments().then((response) => {
      this.setState({
        comments: response.comments,
      });
    });
  }
}

// The merging is shallow, so this.setState({comments}) leaves 
// this.state.posts intact, but completely replaces this.state.comments
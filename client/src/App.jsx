import React, { Component } from 'react';
import Profile from './components/profile/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    return this.state.posts.map((p, i) => <Profile key={i} profile={p} />);
  }

  async componentDidMount() {
    const posts = await (await fetch('/api/posts')).json();
    this.setState({ posts });
  }
}

export default App;

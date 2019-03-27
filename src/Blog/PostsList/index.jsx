import React, { Component } from 'react';
import './PostsList.css';
import PageHeader from '../../Common/PageHeader';
import Loading from '../../Common/Loading';
import getPosts from './getPosts'

class PostsList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      posts: []
    }
  }

  async componentDidMount() {
    const {error, posts} = await getPosts();
    this.setState({
      loading: false,
      posts,
      error
    })
  }

  render() {
    return (
      <div className="PostsList">
        {this.state.loading && <Loading />}
        {this.state.error && <p>An error has occured. Please see the console.</p>}
        {this.state.posts && <p>Posts!</p>}
      </div>
    )
    if (this.state.loading) {
      return (<Loading />)
    }
    return (
      <div className="PostsList">
        <PageHeader />
        <div className="pageContent">
          <p>Loading</p>
        </div>
      </div>
    )
  }
}

export default PostsList;
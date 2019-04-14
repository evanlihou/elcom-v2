import React, { Component } from 'react';
import QueryString from 'query-string';
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

  async componentWillMount() {
    var query = QueryString.parse(window.location.search);
    var page = query.page || 1;
  
    await this.fetchPage(page);
  }

  async fetchPage(pageNum) {
    this.setState({loading: true, posts: null, error: null});
    const {error, posts, meta: {pagination}} = await getPosts(pageNum);
    this.setState({
      loading: false,
      posts,
      error,
      pagination
    })
    if (error) console.error(error);

    if (window.history.pushState && pageNum > 1) {
      // Set query string
      var query = QueryString.parse(window.location.search);
      query.page = pageNum;
      var newUrl = window.location.pathname + '?' + QueryString.stringify(query);
      window.history.pushState({
        path: newUrl,
        title: document.title
      }, document.title, newUrl);
    }
  }

  render() {
    return (
      <div className="PostsList">
        <PageHeader title="Blog" />
        <div className="pageContent">
          {this.state.loading && <Loading />}
          {this.state.error && <p>An error has occured. Please see the console.</p>}
          {this.state.posts && 
            <div className="posts">
              {this.state.posts.map((post) => {return <Post key={post.id} data={post} />})}
              {this.state.pagination && this.state.pagination.pages > 1 &&
                <span className="pagination">
                  {this.state.pagination.prev &&
                    <div className="prevButton">
                      <button className="prevButton" onClick={() => this.fetchPage(this.state.pagination.prev)}>Prev</button>
                    </div>
                  }
                  <span className="progress">
                    {this.state.pagination.page} of {this.state.pagination.pages}
                  </span>
                  {this.state.pagination.next &&
                    <div className="nextButton">
                      <button onClick={() => this.fetchPage(this.state.pagination.next)}>Next</button>
                    </div>
                  }
                </span>
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

class Post extends Component {
  render() {
    let post = this.props.data;
    return (
      <div className="post">
        <a href={post.url}>
        <h4>{post.title}</h4>
        <span className="meta">
          <span title={post.published_moment.format('LLL')}>{post.published_moment.fromNow()}</span>
        </span>
        <p>{post.contents}</p>
        </a>
      </div>
    )
  }
}

export default PostsList;
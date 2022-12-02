import React from 'react';
import './PostsList.sass';
import PageHeader from '../../common/PageHeader';
// import Loading from '../../common/Loading';
import getPosts from './getPosts'
import PaginationControls from './PaginationControls';

export default async function Page(params) {
  const {error, posts, meta: {pagination}} = await getPosts(params?.params?.page ?? 1);

  return (
    <div className="PostsList">
      <PageHeader title="Blog" />
      <div className="pageContent">
        <div className="posts">
          {posts.map((post) => {return <Post key={post.id} data={post} />})}
          <PaginationControls pagination={pagination} />
        </div>
      </div>
    </div>
  );
}

/*class PostsList extends Component {
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
      
    )
  }
}*/

function Post({data: post}) {
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
  );
}
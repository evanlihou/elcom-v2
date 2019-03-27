import React, { Component } from 'react';
import Loading from '../../Common/Loading';
import PageHeader from '../../Common/PageHeader';
import env from '../../.env.js';

import Moment from 'moment';

/** 
 * The source of the post is trusted, but just in case someone tries to
 * pass in evil data, sanitize it for the client so we can be sure they
 * don't try to run any scripts remotely loaded. This library helps
 * make sure the HTML from the post is clean.
*/
import SanitizeHtml from 'sanitize-html';

class NowPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      nowContent: null,
      noNowPost: false
    }
  }

  componentDidMount() {
    this.getNowPost();
  }

  async getNowPost() {
    var res = await fetch(
      env.blogBaseEndpoint +
      '/posts/' + 
      "?key=" + env.blogContentApiKey +
      "&filter=tag:now" + 
      "&limit=1" + 
      "&order=published_at%20desc");
    var { posts } = await res.json();
    
    if (!posts) {
      this.setState({
        loading: false,
      });
      return;
    }

    var post = posts[0];
    post["publish_moment"] = new Moment(post["published_at"]);

    console.log(post["publish_moment"])

    console.log(posts[0]);
    this.setState({
      nowContent: posts[0],
      loading: false
    });
  }

  render() {
    var now = this.state.nowContent;
    return(
      <div className="NowPage">
        <PageHeader title="Now" />
        <div className="pageContent">
          {this.state.loading && <Loading />}
          {!this.state.loading && !now &&
            <div>
              <h3>Whoops...</h3>
              <p>Couldn't find a blog post detailing what I'm up to now.</p>
            </div>
          }
          {!this.state.loading && now &&
            <div>
              <h3>
                {now.title}
              </h3>
              <div className="meta">
                <span title={now.publish_moment.format("LLL")}>{now.publish_moment.fromNow()}</span>
                {" | "}
                <a href={now.url} className="">Permalink</a>
              </div>
              {/* Remote HTML shouldn't be rendered unless from a known safe source and sanitized. */}
              <div className="postContent" dangerouslySetInnerHTML={{'__html': SanitizeHtml(now.html)}}/>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default NowPage;
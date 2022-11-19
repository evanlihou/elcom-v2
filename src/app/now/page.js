'use client';

// TODO: Make this SSR-compatible

import React, { Component } from 'react';
import Loading from '../common/Loading';
import PageHeader from '../common/PageHeader';
import GetNowPost from './getNowPost';

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

  async componentDidMount() {
    var now = await GetNowPost();
    this.setState({
      loading: false
    });

    if (now.error) {
      alert(now.error);
    } else {
      this.setState({
        nowContent: now
      });
    }
  }

  render() {
    var now = this.state.nowContent;
    return(
      <div className="NowPage">
        <PageHeader title="Now" />
        <div className="pageContent">
          <NowExplaination />
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

class NowExplaination extends Component {
  render() {
    return (
      <div className="NowExplaination">
        <p>
          <em>
            A Now page is a concept by <a href="https://sivers.org/nowff">Derek Sivers</a> which makes it easy for someone
            looking at a personal website to see what that person has been
            focusing on recently. It is not a daily account of my life, simply
            a high level overview of my priorities.
          </em>
        </p>
      </div>
    )
  }
}

export default NowPage;
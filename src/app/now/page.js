import React from 'react';
import PageHeader from '../common/PageHeader';
import getNowPost from './getNowPost';

/** 
 * The source of the post is trusted, but just in case someone tries to
 * pass in evil data, sanitize it for the client so we can be sure they
 * don't try to run any scripts remotely loaded. This library helps
 * make sure the HTML from the post is clean.
*/
import SanitizeHtml from 'sanitize-html';

export default async function NowPage() {
  const now = await getNowPost();

  return (
    <div className="NowPage">
      <PageHeader title="Now" />
      <div className="pageContent">
        <NowExplaination />
        {!now &&
          <div>
            <h3>Whoops...</h3>
            <p>Couldn't find a blog post detailing what I'm up to now.</p>
          </div>
        }
        {now &&
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

function NowExplaination() {
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
  );
}
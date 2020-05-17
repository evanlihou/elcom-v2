import env from '../../.env.js';
import Moment from 'moment';

/**
 * Gets the latest post from my blog with the tag "now" and returns it as
 * received from the API plus a moment object as "publish_moment" to make
 * displaying dates easier. Returns null if no post found, or object with "error"
 * key if an error occured.
 */
async function getNowPost() {
    try {
        var res = await fetch(
            env.blogBaseEndpoint +
            '/posts/' + 
            "?key=" + env.blogContentApiKey +
            "&filter=tag:now" + 
            "&limit=1" + 
            "&order=published_at%20desc");
          var { posts } = await res.json();
    } catch (ex) {
        return {error: ex}
    }
    
    if (!posts) {
      return null;
    }

    var post = posts[0];
    post["publish_moment"] = new Moment(post["published_at"]);

    return post;
  }

  export default getNowPost;

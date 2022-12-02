import env from '../../../.env.js'
import Moment from 'moment';

const TRIM_LEN = 200;
const PAGE_LIMIT = 10;

async function getPosts(pageNum = 1) {
  try {
    const response = await fetch(
      env.blogBaseEndpoint +
      '/posts/?key=' +
      env.blogContentApiKey +
      '&fields=id,title,published_at,url' + 
      '&formats=plaintext' + 
      '&limit=' + PAGE_LIMIT + 
      '&page=' + pageNum
    );
    const json = await response.json();
    if (json.posts) {
      for (var i in json.posts) {
        json.posts[i]['published_moment'] = new Moment(json.posts[i]['published_at']);

        var contents = json.posts[i]['plaintext'];
        if (contents.length > TRIM_LEN) {
          // Break at next space
          var nextSpace = contents.indexOf(' ', TRIM_LEN);
          contents = contents.substr(0, nextSpace) + "\u2026"
        }

        json.posts[i]['contents'] = contents;
      }
      return json;
    } else {
      throw Error("No posts found");
    }
  } catch (e) {
    return {error: e};
  }
}

export default getPosts
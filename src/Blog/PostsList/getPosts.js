import env from '../../.env';

async function getPosts() {
  try {
    const response = await fetch(
      env.blogBaseEndpoint + '/posts/?key=' + env.blogContentApiKey
    );
    const json = await response.json();
    return {posts: json.posts};
  } catch (e) {
    return {error: e}
  }
}

export default getPosts
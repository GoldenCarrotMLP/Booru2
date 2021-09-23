var headers = {'user-agent': 'my-app/0.0.1 goldencarrot'}
var url = 'https://e621.net/posts.json?'
var auth = 'goldencarrot cEgqVRkzauWzTtBmbz32aLLf'

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
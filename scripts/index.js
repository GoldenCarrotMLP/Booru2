var headers = {'user-agent': 'my-app/0.0.1 goldencarrot'}
var url = 'https://e621.net/posts.json?'
var auth = 'goldencarrot cEgqVRkzauWzTtBmbz32aLLf'
tags = 'tags=fluffy+rating:s&limit=1'

fetch(url+tags)
  .then(response => response.json())
  .then(data => console.log(data));

var url = 'https://e621.net/posts.json?'
var auth = 'goldencarrot:cEgqVRkzauWzTtBmbz32aLLf'
var tags = 'tags=fluffy+rating:s&limit=1'
var pic = ''

fetch(url+tags,{headers: new Headers({'Authorization': 'Basic '+btoa(auth)})})
  .then(response => response.json())
  .then(data => console.log(data))
  .then(data => pic);
  //document.getElementById("d").alt=pic;
  console.log(pic)
  

var url = 'https://e621.net/posts.json?'
var auth = 'goldencarrot:cEgqVRkzauWzTtBmbz32aLLf'

var pic = ''


var a = pic;


function myFunction() {
  var tags = document.getElementById("tags").value;
   var getTags= "tags="+ (tags.replaceAll(' ', '+')) + "&limit=1";
  fetch(url+getTags,{headers: new Headers({'Authorization': 'Basic '+btoa(auth)})})
  .then(response => response.json())
  .then(data => pic = data.posts[0].file.url);
  console.log(url+getTags)

    document.getElementById("button").src=pic;
}
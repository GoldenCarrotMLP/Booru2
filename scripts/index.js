
var url = 'https://e621.net/posts.json?'
var auth = 'goldencarrot:cEgqVRkzauWzTtBmbz32aLLf'

var pic = ''


var a = pic;


function myFunction() {
  var tags = document.getElementById("tags").value;
   var getTags= "tags="+ tags.replace(' ', '+') + "&limit=1";
  fetch(url+tags,{headers: new Headers({'Authorization': 'Basic '+btoa(auth)})})
  .then(response => response.json())
 // .then(data => console.log(data))
  .then(data => pic = data.posts[0].file.url);
  

    document.getElementById("button").src=pic;
}
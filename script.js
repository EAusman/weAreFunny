const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json){
  console.log(json);
  
});

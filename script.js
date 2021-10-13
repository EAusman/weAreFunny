async function getAJoke(){
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
await fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json){
  console.log(json);
  let joke;
  let reply;
  if(json.type === "twopart"){
    joke=json.setup
    reply=json.delivery
    document.getElementById("joke").innerHTML = joke;
    document.getElementById("answer").innerHTML = reply;
  }
  else{
    joke=json.joke
    document.getElementById("joke").innerHTML = joke;
  }
});
}

async function getAJoke(){
event.preventDefault();
console.log("We made it");
let categories = "";
if(document.getElementById("programming").checked){
  categories+="Programming"
}
if(document.getElementById("misc").checked){
  if(categories.length()>0){
    categories+=","
  }
  categories+="Miscellaneous"
}
if(document.getElementById("dark").checked){
  if(categories.length()>0){
    categories+=","
  }
  categories+="Dark"
}
if(document.getElementById("pun").checked){
  if(categories.length()>0){
    categories+=","
  }
  categories+="Pun"
}
if(document.getElementById("spooky").checked){
  if(categories.length()>0){
    categories+=","
  }
  categories+="Spooky"
}
if(document.getElementById("christmas").checked){
  if(categories.length()>0){
    categories+=","
  }
  categories+="Christmas"
}
if(categories.length==0){
  categories="Any"
}
console.log(categories);
const url = "https://v2.jokeapi.dev/joke/"+categories+"?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
 fetch(url)
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

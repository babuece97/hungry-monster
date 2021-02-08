var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.search');


button.addEventListener('click', function(name){
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a') //+input.value)
.then(response => response.json())
.then(data => 
  
  {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['food'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("SoRRRy , We dont have it!"));
}) 

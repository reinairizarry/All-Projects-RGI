var editSmall = document.querySelector("small");
var textInput = document.querySelector("input");
var span = document.querySelectorAll("span");
var input = document.querySelector("input[type='text']");

editSmall.addEventListener("click",function(){
  textInput.style.display="block";
});

input.onkeypress = (function(event){
  if (event.which == 13){
    var toDo = document.createElement("li");
    var toDoText = document.createTextNode(this.value);
    toDo.appendChild(toDoText);
    document.getElementById('textHolder').appendChild(toDo);
  }
})

for (var i = 0; i < span.length; i++){
  span[i].addEventListener("click", function(){
    this.parentElement.style.display="none";
  });
}

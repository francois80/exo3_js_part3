/*function customParagraph(color){
  var paragraph = document.querySelector('p');
  paragraph.style.color = color;
}
//sélection du div parent de nos boutons
var parent = document.querySelector('#text + div');
parent.addEventListener('click',function(event){
  let target = event.target;
  let classes = target.getAttribute('class');
  let color = classes.split(' ').slice(-1).toString();
  customParagraph(color);
});
//////////*/

function customParagraph(){
  var color = this.getAttribute('class').split(' ').slice(-1).toString();
  var paragraph = document.querySelector('p');
  paragraph.style.color = color;
}

var targets = document.querySelectorAll('.color');
for (var i = 0; i < targets.length; i++) {
  targets[i].addEventListener('click',customParagraph)
}
//var classes = targets[1].getAttribute('class');

window.open("", "_self",'resizable=no, scrollbars=no, width=200, height=320');
var cwidth = window.innerWidth;
var cheight = window.innerHeight*0.75;
function setup(){
  createCanvas(cwidth,cheight);
  noFill();
  strokeWeight(1.5);
}

var maxNum = 1000;
var minNum = 80;
var mindim = Math.min(cwidth, cheight);
var maxLevel = Math.round(Math.random()*(maxNum-minNum))+minNum;
var eheight = mindim*0.27;
console.log(eheight);
var ewidth = eheight;
var drawn =false;

console.log("Ellipse number: "+maxLevel);
function add(){
  clear();
  console.clear();
  console.log(maxLevel+1);
  maxLevel++;
  drawn = false;
  updateMenu();
}
function minus(){
  clear();
  console.clear();
  maxLevel--;
  console.log(maxLevel);
  drawn = false;
 updateMenu();
}
function draw(){
  translate(cwidth/2, cheight/2);
  if(!drawn){
  for(var level = 0; level < maxLevel; level++){
  rect(50, 50, ewidth, eheight);
  rotate(100*Math.PI/maxLevel);
  var x = Math.exp(Math.log(0.01)/maxLevel)
  scale(x);
  
  }}
  drawn = true;
}
window.onload = (()=>{
// JavaScript to toggle the hamburger menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var menu = document.getElementById('menu');

hamburgerIcon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('current-variable1').textContent = parseInt(ewidth);
document.getElementById('current-variable2').textContent = parseInt(eheight);
document.getElementById('current-variable3').textContent = parseInt(maxLevel);
document.getElementById('variable1').value = parseInt(ewidth);
document.getElementById('variable2').value =  parseInt(eheight);
document.getElementById('variable3').value = parseInt(maxLevel);

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== hamburgerIcon) {
      menu.style.display = 'none';
  }
});
});
function updateVariables() {
  clear();
  ewidth= parseInt(document.getElementById('variable1').value);
  eheight = parseInt(document.getElementById('variable2').value);
  maxLevel = parseInt(document.getElementById('variable3').value);
 drawn = false;
 document.getElementById('current-variable1').textContent = parseInt(ewidth);
  document.getElementById('current-variable2').textContent = parseInt(eheight);
  document.getElementById('current-variable3').textContent = parseInt(maxLevel);
}
function updateMenu(){
document.getElementById('current-variable1').textContent = parseInt(ewidth);
document.getElementById('current-variable2').textContent = parseInt(eheight);
document.getElementById('current-variable3').textContent = parseInt(maxLevel);
document.getElementById('variable1').value = parseInt(ewidth);
document.getElementById('variable2').value =  parseInt(eheight);
document.getElementById('variable3').value = parseInt(maxLevel);
}
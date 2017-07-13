/*function dice(){
    console.log(Math.floor(Math.random()*6));
}*/
function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}
var lunches = ["chinese","caribbean","mexican","ribs","Chicken"];

var lunch_today = lunches[rand(5)];

console.log(lunch_today);
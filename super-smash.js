var prompt = require('prompt-sync')();
var mashArray = ["Iceland","Poland","Krysalis","Krotopeia"];
var firstQuestion = [9,2];
var secondQuestiom = ["DonkeyKong","Falcon","Samus"];
function getAnswers(){
     var answer1 = prompt ('How many times will you strike?');
     if (answer1 == 9){
         console.log("Get hit nine time");
     }
     else if (answer1 == 2){
         console.log("get hits two times");
     }
    var answer2 = prompt ('Who will you choose to fight?');
    if (answer2 == "DonkeyKong"){
        console.log("You will fight donkeyKong");
    }
    else if (answer2 == "Falcon"){
        console.log("You will fight Falcon");
     prompt(answer1);
    firstQuestion.push(answer1);
    SecondQuestion.push(answer2);

}


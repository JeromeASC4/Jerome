function rand(upperBound){
    return Math.floor(Math.random()*upperBound);
}

function randLetter(){
    var ab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var ltr = ab[rand(ab.length)];
    return ltr;
    console.log(randLetter());
}

function RandWord() {
    var str ="";
    for (var i=1; i<rand(11); i++){
        str =+ randletter();
    }
    return str;
}
var array1 = ["pikkachu ",23,100];
var array2 = ["Chrizard",50,200];
function pokeattack(array1,array2) {
    array2[2] -= array1[1];
    return array2;
}
console.log (pokeattack(array1,array2));



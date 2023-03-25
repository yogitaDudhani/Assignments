function squareOfWordLength(para) 
{
    var length=para.length;
    var square=length*length;
    return square;
}
var answer=squareOfWordLength("javascript");
console.log(answer);
var answer=squareOfWordLength("Google Chrome");
console.log(answer);
var answer=squareOfWordLength("Developer Smart");
console.log(answer);

function divide() {
var string="I Am Angular Developer";
var length=string.length;
console.log("length of string is :",length);
var split=string.split(" ").length;
console.log("total number of words",string.split(" "));
var div=length/split;
console.log("division of string length and number of words in string",div);
var mul=length*split;
console.log("multiplication of string length and number of words in string",mul);
}
divide();
    

console.log("**assignment1**");
function greaterNumber(n1,n2) {
    var result=n1>n2?"n1 is greater":"n2 is greater";
    console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);
function isEvenOrOdd(para) {
    var result=para%2==0?`${para}is even`:`${para} is odd`;
    return result;
    
}
var answer=isEvenOrOdd(29);
console.log(answer);
var answer=isEvenOrOdd(44);
console.log(answer);
var answer=isEvenOrOdd(0);
console.log(answer);
var answer=isEvenOrOdd(101);
console.log(answer);
function isEvenOdd(para) {
    var length=para.length;
    var result=length%2==0?`${para} is even`:`${para} is odd`;
    return result;
    
}
var answer=isEvenOdd("Javascript");
console.log(answer);
var answer=isEvenOdd("developer");
console.log(answer);
var answer=isEvenOdd("google");
console.log(answer);
console.log("**assignment2 with ternary operator**");
function maleMarriageEligibility(gender,age,boyname) {
    var result=gender=="male"&&age>21?`Hey ${boyname} u r eligible for marriage`:`not eligible`;
    return result;
    }
    var answer=maleMarriageEligibility("male","25","Bill gates");
    console.log(answer);
    var answer=maleMarriageEligibility("male","17","Stew jobs");
    console.log(answer);
console.log("**assignment with ifelse**");
function femaleMarriageEligibility(gender,age,girlname) {
    if(gender=="female"&&age>18){
        console.log(`Hey ${girlname} u r eligible for marriage`);
    }
    else{
        console.log("not eligible");
    }
    
}
femaleMarriageEligibility("female",16,"jenifer");
femaleMarriageEligibility("female",27,"Malinda gates");
console.log("**assignment3**");
function tcsEligibility(gradScore,hscScore,sscScore,name) {
    var result=gradScore>=70||hscScore>80||sscScore>90?`congrates ${name} u r eligible for TCS interview`:"not eligible for interview";
    return result;
}
var answer=tcsEligibility(80,86,90,"yogita");
console.log(answer);
var answer=tcsEligibility(70,65,55,"shiv");
console.log(answer);
var answer=tcsEligibility(60,79,88,"sharvil");
console.log(answer);


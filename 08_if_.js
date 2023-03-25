console.log("if statement");
function isEvenOdd(num) {
    if(num%2==0){
        console.log(`${num} is even`);
    }
    if(num%2!=0){
        console.log(`${num} is odd`);
    }
}
isEvenOdd(45);
isEvenOdd(70);
isEvenOdd(67);
isEvenOdd(98);
function vote(age) {
    if(age>=18){
        console.log("eligible for vote");
    }
    if(age<18){
        console.log("not eligible for vote");
    }
    
}
vote(18);
vote(20);
vote(17);
vote(40);
function length(str) {
    if(str.length>10){
        console.log("length is more than 10");
    }
    if(str.length<10){
        console.log("length is less than 10");
    }
    
}
length("javascript-ES6");
function str(string) {
    if(string.charAt(0)=="j"){
        console.log("string start with j");
    }
    if(string.charAt(0)!="j"){
        console.log("string not starts with j");
    }
}
str("yogita");
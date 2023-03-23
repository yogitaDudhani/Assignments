console.log("function with no arg and no return");
function myName(){
    console.log("My name is yogita Dudhani");
}
myName();
console.log("function with arg and no return");
function personalDetails(firstName,lastName,collegeName){
    console.log(firstName,lastName,collegeName);
}
personalDetails('yogita','dudhani','SPC');
console.log("swaping variables");
function swap(n1,n2){
    console.log("before swaping",n1,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("after swaping",n1,n2);
}
swap('virat','Anushka');
swap(1000,2000);
console.log("function with arg and return value");
function addThreeValues(n1,n2,n3){
    var sum=n1+n2+n3;
    return sum;
}
var result=addThreeValues(10.23,600,40);
console.log(result);

var result=addThreeValues('Hello','Good','Morning');
console.log(result);
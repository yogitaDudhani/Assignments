function stringHandsOn(){
    var givenString="   Hey you are doing good keep it up  ";
    console.log(givenString);
    console.log("length of given string :",givenString.length);
    console.log("after removing space string is:",givenString.trim(),",length after trimming:",givenString.trim().length);
var result=givenString.length-givenString.trim().length;
console.log("total spaces removed is:",result);
console.log("first char of trim string",givenString.trim().charAt(0));
console.log("first char of trim string",givenString.trim().charAt(givenString.trim().length-1));
var trimm=givenString.trim();
console.log("total words after trim:",trimm.split(" "));
console.log("substring methode",givenString.substring(22));
console.log("slice methode",givenString.slice(22));
}
stringHandsOn();
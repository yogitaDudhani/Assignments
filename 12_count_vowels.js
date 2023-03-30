console.log("**number of vowels**");
vowel( "javascript Is language of internet");

vowel("I am Angular developer");
vowel("hard work and commitment is the key of success");

function vowel(str) {
    

var count = 0;
for (let i = 0; i <= str.length; i++) {
    var c = str.charAt(i);

    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u"||c=="A"||c=="E"||c=="O"||c=="I"||c=="U") {
        count = count + 1;
    }

}
console.log(count);
}
console.log("**last word count**");
lastWord("I am angular developer");
lastWord("my name is yogita");
function lastWord(str) {
    var count=0;
    for(let i=str.length;i>=0;i--){
        
        var c=str.charAt(i);
        if(c==" "){
            break;
        }
        count=count+1;
    }
    console.log(count);
}

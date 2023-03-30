function monthOfYear(n) {
switch (n) {
    case 1:
        console.log(`month at ${n}is January`);
        break;
        case 2:
        console.log(`month at ${n}is february`);
        break;
        case 3:
        console.log(`month at ${n}is March`);
        break;
        case 4:
        console.log(`month at ${n}is April`);
        break;
        case 5:
        console.log(`month at ${n}is May`);
        break;
        case 6:
        console.log(`month at ${n}is June`);
        break;
        case 7:
        console.log(`month at ${n}is July`);
        break;
        case 8:
        console.log(`month at ${n}is Auguest`);
        break;
        case 9:
        console.log(`month at ${n}is September`);
        break;
        case 10:
        console.log(`month at ${n}is Octomber`);
        break;
        case 11:
        console.log(`month at ${n}is November`);
        break;
        case 12:
        console.log(`month at ${n}is December`);
        break;
        default:
            console.log("please provide valid month");
        break;
}
    
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
console.log("**leap year**");
function leap(year) {
    if(typeof year!="number"){
        console.log("provide valid year");
    }
    if(year%4==0){
        console.log(`its a leap year ${year}`);
    }
    else{
        console.log(`not leap year${year}`);
    }
}
leap(2020);
leap(1999);
leap(1600);
leap(2022);
leap(1995);
leap(1750);
leap(null);
leap("twenty twenty");
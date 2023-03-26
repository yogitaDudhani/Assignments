console.log("assignment1**");
function voteEligibility(age) {
    if(age>18&&age<200){
        console.log("eligible for vote");
    }
    else{
        console.log("not eligible");

    }
}
voteEligibility(17);
voteEligibility(-10);
voteEligibility(0);
voteEligibility(200);
voteEligibility(45);
function gradeCalculation(mark) {
    if( mark>100||mark <= 0||typeof mark!="number"){
        console.log(`please provide valid marks ${mark}`);
    }
    if(mark>=90&&mark<100){
console.log(`fantastic marks${mark} ,ur grade is A+`);
    }
if(mark>=75&&mark<90){
console.log(`excellent marks${mark} ur grade is A`);
}
    if(mark>=50&&mark<75){
        console.log(`good marks ${mark}ur grade is B`);
    }
    if(mark>=35&&mark<50){
        console.log(`${mark}need improvement,ur grade is C`);
    }
    if(mark<35&&mark>0)
    {
        console.log(`average marks ${mark}`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation("91");
gradeCalculation(NaN);
gradeCalculation(null);
gradeCalculation("eighty");
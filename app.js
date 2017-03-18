/*
TASK#1

var a=prompt("Enter");
console.log("Hi, ",a);
*/

/*
TASK#2


var a=prompt("Enter number");

for(var i=1; i<=10 ;i++){
console.log(a," x ",i," = ",a*i);
}
*/


/*
TASK#3

var a=prompt("Enter city");
if( a=="karachi"|| a=="Karachi"){

console.log("Welcome to the city of light");
}*/


/*
TASK#4

var a=prompt("Enter color of signal");

if(a==="red"){
    console.log("vehicles must stop");
}

else if(a==="yellow"){
    console.log("vehicles should get ready to move");

}else{
    console.log("vehicles can move now");

}*/

/*
Task#5
var a=prompt("Enter current age");

var b=prompt("Enter max age");

if(a<=b){
    console.log("You are welcome");
}
else{
    console.log("sorry not allowed");

}
*/

/*
Task#6

var a=prompt("enter your fuel remaining in liters");

if(a<0.25){
    console.log("Please refill the fuel in your car");
}
*/
/*
Task#9
var a=+prompt("Input marks of 1st subject out of 100");

var b=+prompt("Input marks of 2nd subject out of 100");
var c=+prompt("Input marks of 3rd subject out of 100");

var total=300;
var obTotal=a+b+c;

var per=obTotal*100/total;

if(per>=80){
    console.log("Total marks: ",total);
    console.log("Marks Obtained: ",obTotal);
    console.log("Percentage: ",per);
    console.log("Grade: A-one");
    
    console.log("Remarks : Excelent");

}

else if(per>=70 && per<80){
    console.log("Total marks: ",total);
    console.log("Marks Obtained: ",obTotal);
    console.log("Percentage: ",per);
    console.log("Grade: A");
    
    console.log("Remarks : Good");

}else if(per>=60 && per<70){
    console.log("Total marks: ",total);
    console.log("Marks Obtained: ",obTotal);
    console.log("Percentage: ",per);
    console.log("Grade: b");
    
    console.log("Remarks : you need to improve");

}else{
    console.log("Total marks: ",total);
    console.log("Marks Obtained: ",obTotal);
    console.log("Percentage: ",per);
    console.log("Grade: Fail");
    
    console.log("Remarks : Sorry");

}*/


/*

TASK#10
var a = prompt("enter name of item 1");

var b = prompt("enter name of item 2");

var c = +prompt("enter price of item 1");

var d = +prompt("enter price of item 2");

var e = +prompt("order quantity of item 1");

var f = +prompt("order quantity of item 2");

var ship = +prompt("shiping charges");

var c1 = c * e;

var d1 = d * f;

var total = c1 + d1+ship;
var dis;
if (total > 2000) {
alert(total);
    dis = (total * 10) / 100;

}else{
dis = 0;

}
console.log("price of ", a, "is: ", c);

console.log("quantity of ", a, "is: ", e);
console.log("price of ", b, "is: ", d);

console.log("quantity of ", a, "is: ", f);

console.log("shipping chargers: ", ship);

console.log("totol coast of your order is ", total, " PKR");

console.log("discount price is ", dis, " PKR");*/


/*
Task#11
var num=6;
var a=prompt("guess the secret number  (ranging from 1 to 10) ");
if(a==6){
    console.log("Bingo! Correct answer");
}

else if(a==5|| a==4){
    console.log("Close enough to the correct answer");
}*/
/*
task#12

var a=prompt("Enter a number to check");
if(a%3==0){
    console.log("number is divisible by 3");
}else{
console.log("not divisible by 3");
    
}
*/


/*
task#13
var a=prompt("Enter 1st team name");
var x=+prompt("Enter 1st team score");
var b=prompt("Enter 2nd team name");
var y=+prompt("Enter 2nd team score");

if(x==y){
    console.log("TIE B/W TEAMS");
}else if(x>y ){
    
    console.log(a,"' team wins");
}else if(y>x ){
    
    console.log(b,"'s team wins");
}*/


/*
task#14
var str="HELLOW..";
var num=9284;
var flag=true;

console.log(str," is a ",typeof str);

console.log(num," is a ",typeof num);
console.log(flag," is a ",typeof flag);*/


/*
task#15
var a=prompt("Enter a number to check");
if(a%2==0){
    console.log("number is ODD");
}else{
    console.log("number is EVEN");
}
*/

/*
task#16
var a=prompt("Enter  temperature to chcek");

if(a>=40){
console.log("It is too hot outside");
}else if(a>=30 && a<40){
console.log("The Weather today is Normal");
    
}else if(a>=20 && a<30){
console.log("Todays weather is cold");
    
}else{
    console.log("OMG!., Todays weather is too cold");
}
*/


/*
task#17
var a=+prompt("Enter 1st number");

var c=prompt("Enter oprater");
var b=+prompt("Enter 2nd number");

if(c==="+"){
    console.log(a+b);
}else if(c==="-"){
    console.log(a-b);
}else if(c==="*"){
    console.log(a*b);
}else if(c==="/"){
    console.log(a/b);
}else{
    console.log("operator undefined");
}*/

/*
task#18
var c=prompt("Enter Day");

if(c=="sunday"||c=="Sunday"){
    console.log("Yay!, its holiday");
}else if(c=="saturday"||c=="Saturday"){
    console.log("its weekend");
}else{
    console.log("its a weekday")
}*/


/*
task#19
var a=prompt("Enter your score");
if(a>=50){
    console.log("you passed");
}else{
    console.log("YOU FAILED,Better luck next time");
}*/



/*
Task#20

var a=+prompt("Enter 1st number");
var b=+prompt("Enter 2nd number");

if(a>b){
    console.log("The greater number of ",a,"and",b,"is",a);
}
else if(b>a){
console.log("The greater number of ",a,"and",b,"is", b);

}else{
    console.log("The numbers are equal");

}*/



/*
task#21

var a=prompt("Enter language code(en,es,de)");
if(a=="en"){
    console.log("Hello world");
}else if(a=="es"){
    console.log("hola mundo");
}else{
    console.log("Hallo Welt");
}
*/



/*Task#22
var a=prompt("input a number");
if(a<0){
    console.log("the number is negative");
}else{
console.log("the number is positive");
    
}*/

/*
Task#23
var a=prompt("enter a noun");

var b=+prompt("enter a number");

if(b==1){
    console.log(b,a);
}else{
        console.log(b,a+"s");
}
*/
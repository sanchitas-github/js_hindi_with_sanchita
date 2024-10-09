let score="33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
/*
output:
string
string
number
NaN (not a number)
*/
/*
"33"=>33
"33abc"=> NaN
true=>1;false=>0

*/

let someNumber=33;
let stringNumber=String(someNumber) //coversion of 33 into string
console.log(stringNumber); // value shown 33 but
console.log(typeof stringNumber) //string

let isloggedin=1 //1=>true,0=>false,
let booleanIsLoggedIn=Boolean(isloggedin)
console.log(booleanIsLoggedIn);

let isloggedin1="" //""=>false
let booleanIsLoggedIn1=Boolean(isloggedin1)
console.log(booleanIsLoggedIn1);

let isloggedin2="sanchita" //"sanchita"=>true
let booleanIsLoggedIn2=Boolean(isloggedin2)
console.log(booleanIsLoggedIn2);


let score1=null
console.log(typeof score1);
console.log(typeof(score1));
let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
/*
output:
object
object
number
0
*/
let score2=true
console.log(typeof score2);
console.log(typeof(score2));
let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);
/*
Output:
boolean
boolean
number
1
*/
let score3="33abc"
console.log(typeof score3);
console.log(typeof(score3));
let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);
/*
Output:
string
string
number
NaN
*/
let score4="33abc"
console.log(typeof score4);
console.log(typeof(score4));
let valueInNumber4=Number(score4)
console.log(typeof valueInNumbe4);
console.log(valueInNumber4);
/*
Output:
string
string
number
NaN
*/

//******************* OPERATIONS***************//
//Arithmetic operations//
/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);*/
let value=3
let negvalue= -value;

let str1="hello";
let str2="sanchita";
let str3=str1+str2;
console.log(str3)// output => hello sanchita

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
let num1,num2,num3
num1=num2=num3=2+2
let gameCounter=100
gameCounter++;
console.log(gameCounter);//101
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
let num11,num12,num13
num11=num12=num13=2+2
let gameCounter1=100
++gameCounter1;
console.log(gameCounter1);//101

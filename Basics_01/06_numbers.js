const score=400
console.log(score)//400
console.log(typeof score)//number

const balance=new Number(100)
console.log(balance) //[Number: 100]

console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00
//tofixed() is specially used in making ecommerce website for giving fixed values that is easily raedable by the user



const othernumber=23.8966
console.log(othernumber.toPrecision(3))//23.9

const othernumber1=1123.8966
console.log(othernumber1.toPrecision(3))//1.12e+3
//toprecision():returns a string containing a number represented either in exponential or fixed point notation with a specified number of digits

const hundreds=100000
console.log(hundreds.toLocaleString())//100,000  usa number system
console.log(hundreds.toLocaleString('en-IN'))//1,00,000  india number system

//++++++++++MATH+++++++++//
//math library comes with ajavscript bydefault
console.log(Math);//Object [Math] {}
console.log(Math.round(4.3));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.1));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4,3,6,8));//3
console.log(Math.max(4,3,5,8));//8
console.log(Math.random())//0.5266279731629819
console.log(Math.random()*10); //4.423434761509677
console.log(Math.random()*10+1);//3.1533904511108393
console.log(Math.floor(Math.random()*10+1));//9


const min=10
const max=20
Math.random()*(max-min+1)
console.log(Math.floor(Math.random()*(max-min+1))+min)//11






